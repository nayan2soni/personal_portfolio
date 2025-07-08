import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, mobile, description } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create the email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Mobile: ${mobile || 'Not provided'}
Description: ${description || 'Not provided'}

Submitted at: ${new Date().toISOString()}
    `.trim();

    // Send email using Python script
    const pythonScript = path.join(process.cwd(), 'scripts', 'send_email.py');
    
    return new Promise((resolve) => {
      const pythonProcess = spawn('python', [pythonScript, emailContent]);
      
      let output = '';
      let errorOutput = '';

      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(NextResponse.json({ success: true }));
        } else {
          console.error('Python script error:', errorOutput);
          resolve(NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
          ));
        }
      });
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 