import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nayan",
  lastName: "Soni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/profile.jpg", // Updated avatar
  email: "nayan2soni@gmail.com",
  location: "Bengaluru, Karnataka, India", // For display only
  timezone: "Asia/Kolkata", // For time display
  languages: [
    { language: "English", proficiency: "Native Proficiency" },
    { language: "Hindi", proficiency: "Native Proficiency" },
    { language: "Tamil", proficiency: "Limited Working Proficiency" },
    { language: "Kannada", proficiency: "Elementary Proficiency" },
  ],
  phone: "+91 9901512072",
  resume: "/images/Resume (8).pdf", // Path to resume PDF
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nayan2soni",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/nayansoni",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm {person.name} – Software Developer & AI Enthusiast</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Customer Loyalty Points Management System</strong></>,
    href: "https://github.com/nayan2soni/Customer-Loyalty-Points-Management-System",
  },
  subline: (
    <>
      Highly motivated Software Developer pursuing a B.Tech in Computer Science, with strong problem-solving skills and attention to detail. Skilled in full-stack and AI-driven application development using Python, JavaScript, Node.js, MongoDB, and Flask. Proficient in Agile methodologies, unit testing, and technical documentation, delivering scalable, high-performance solutions for ResNet Solutions (orizn.io).
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Bengaluru, Karnataka, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Highly motivated Software Developer pursuing a B.Tech in Computer Science,<br />
        with strong problem-solving skills and attention to detail.<br />
        Skilled in full-stack and AI-driven application development using Python, JavaScript, Node.js, MongoDB, and Flask.<br />
        Proficient in Agile methodologies, unit testing, and technical documentation,<br />
        delivering scalable, high-performance solutions for ResNet Solutions (orizn.io).
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Orizn (ResNet Solutions)",
        timeframe: "05/2024 -- 07/2025",
        role: "Software Developer",
        achievements: [
          <>Developed a holiday package booking platform for ResNet Solutions (orizn.io), enhancing user interaction efficiency by 35% through streamlined Next.js components and documented APIs.</>,
          <>Configured MongoDB clusters, achieving 100% data retrieval accuracy for 500+ users, following coding standards.</>,
          <>Streamlined CI/CD pipelines, cutting deployment time by 40% and ensuring scalability with unit testing.</>,
          <>Tools: Next.js, Tailwind CSS, Node.js, MongoDB, Git</>,
        ],
        images: [],
      },
      {
        company: "Disha Tutions",
        timeframe: "06/2024 -- 07/2024",
        role: "Software Developer",
        achievements: [
          <>Designed a responsive home tuition service website, boosting user engagement by 50% for 200+ users with accessible design.</>,
          <>Improved HTML/CSS front-end, reducing load times by 30% and documented for seamless client handoff.</>,
          <>Tools: HTML, CSS, Git</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "SRM Institute of Science and Technology, Chennai",
        logo: "/images/srm-logo.png", // Add this logo to public/images if available
        description: <>
          Bachelor of Technology - BTech, Computer Science and Engineering<br />
          Sep 2022 - Sep 2026
        </>,
      },
      {
        name: "Vedantha PU College",
        logo: "/images/vedantha-logo.png", // Add this logo to public/images if available
        description: <>
          Higher Secondary Education, PCMC<br />
          Jun 2020 - Jun 2022
        </>,
      },
      {
        name: "Delhi Public School - Bangalore South",
        logo: "/images/dps-logo.png", // Add this logo to public/images if available
        description: <>
          Secondary Education, PCMC<br />
          May 2007 - May 2020
        </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, JavaScript, HTML, CSS, Flutter, Dart</>,
        images: [],
      },
      {
        title: "Backend Technologies",
        description: <>Node.js, Express.js, Flask, Sequelize, Spring Boot</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Next.js, Tailwind CSS</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, SQL</>,
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: <>TensorFlow, Scikit-Learn, Artificial Neural Networks, OpenCV</>,
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: <>AWS, Git, GitHub, Postman, Visual Studio Code, CI/CD, Agile, Unit Testing</>,
        images: [],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Licenses & Certifications",
    items: [
      {
        name: "The Bits and Bytes of Computer Networking",
        issuer: "Google (Coursera)",
        date: "Nov 2024",
        link: "https://www.coursera.org/account/accomplishments/records/N1K2NMRIM7XO",
        description: (
          <>
            <a href="https://www.coursera.org/account/accomplishments/records/N1K2NMRIM7XO" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "Goldman Sachs - Software Engineering Job Simulation",
        issuer: "Forage",
        date: "Oct 2024",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_v83dtExEfb4zxa6d3_1728201780084_completion_certificate.pdf",
        description: (
          <>
            <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_v83dtExEfb4zxa6d3_1728201780084_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "J.P. Morgan - Software Engineering Job Simulation",
        issuer: "Forage",
        date: "Jul 2024",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_v83dtExEfb4zxa6d3_1721709294748_completion_certificate.pdf",
        description: (
          <>
            Skills: Python (Programming Language)<br />
            <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_v83dtExEfb4zxa6d3_1721709294748_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "JPMorgan Chase & Co. - Excel Skills Job Simulation",
        issuer: "Forage",
        date: "Jul 2024",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._v83dtExEfb4zxa6d3_1721702627585_completion_certificate.pdf",
        description: (
          <>
            Skills: Data Visualization · Microsoft Excel · Microsoft PowerPoint · Microsoft Office<br />
            <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._v83dtExEfb4zxa6d3_1721702627585_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "DBMS Course - Master the Fundamentals and Advanced Concepts",
        issuer: "Scaler",
        date: "Mar 2024",
        link: "https://moonshot.scaler.com/s/li/ys9XGS-Uhu",
        description: (
          <>
            Skills: Database Management System (DBMS)<br />
            <a href="https://moonshot.scaler.com/s/li/ys9XGS-Uhu" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "PowerShell from Beginner To Sheller And Scripter",
        issuer: "Udemy",
        date: "Mar 2024",
        link: "https://www.udemy.com/certificate/UC-9f64e766-a166-4c3a-8497-a2fce6a0ecc9/",
        description: (
          <>
            <a href="https://www.udemy.com/certificate/UC-9f64e766-a166-4c3a-8497-a2fce6a0ecc9/" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
      {
        name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "Feb 2024",
        link: "https://www.credly.com/badges/c4bed8bc-c4aa-4ca1-8912-958df80b9c68/linked_in_profile",
        description: (
          <>
            Skills: Machine Learning<br />
            <a href="https://www.credly.com/badges/c4bed8bc-c4aa-4ca1-8912-958df80b9c68/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline', fontWeight: 500}}>Show credential</a>
          </>
        ),
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
