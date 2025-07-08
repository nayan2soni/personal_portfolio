#!/usr/bin/env python3
"""
Email sending script for contact form submissions.
Usage: python send_email.py "email_content"
"""

import sys
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def send_email(content):
    """
    Send email using Gmail SMTP.
    You need to set up environment variables:
    - EMAIL_USER: Your Gmail address
    - EMAIL_PASS: Your Gmail app password (not regular password)
    - RECIPIENT_EMAIL: Where to send the contact form submissions
    """
    
    # Email configuration
    sender_email = os.getenv('EMAIL_USER', 'nayan2soni@gmail.com')
    sender_password = os.getenv('EMAIL_PASS', '')  # Set this in your environment
    recipient_email = os.getenv('RECIPIENT_EMAIL', 'nayan2soni@gmail.com')
    
    if not sender_password:
        print("Error: EMAIL_PASS environment variable not set")
        sys.exit(1)
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = f"New Contact Form Submission - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    
    # Email body
    body = f"""
{content}

---
This email was sent from your portfolio contact form.
    """.strip()
    
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        # Create SMTP session
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        
        # Login
        server.login(sender_email, sender_password)
        
        # Send email
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        
        print("Email sent successfully!")
        return True
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python send_email.py 'email_content'")
        sys.exit(1)
    
    content = sys.argv[1]
    success = send_email(content)
    
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main() 