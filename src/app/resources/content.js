import { InlineCode } from "@/once-ui/components";
// import { Certificate } from "crypto"; <- Remove this line
import { display } from "./config";
import { title } from "process";

const person = {
  firstName: "Abdul",
  lastName: "Rehman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: <span style={{ fontSize: "0.7em" }}>Software Engineer | Cyber Security Researcher</span>,
  avatar: "/images/avatar.png", 
  displayLocation: "Pakistan/Lahore", // Changed from .jpg to .png
  location: "Pakistan/Lahore", // Updated to show only Pakistan/Lahore
  languages: ["English", "Urdu", "Punjabi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about software development best practices, emerging technologies, and share insights on
      building scalable and maintainable applications. My focus is on full-stack development and
      modern software architecture.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdulrehman-dev-ai",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdulrehmansarwar", // Fixed LinkedIn URL format
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:iamabdulrehman.technophile@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Abdul Rehman</>,
  subline: (
    <>
      "Software engineering is not just about writing code; it's about solving problems
      <br /> and creating solutions that make a difference in people's lives."
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.link/zp9qa7",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abdul Rehman is a passionate software engineer and cyber security researcher dedicated to
        building secure, scalable solutions. His expertise spans full-stack development, penetration
        testing, and implementing robust security measures to protect digital assets.
      </>
    ),
  },
  //WORK EXPERIENCE SECTION
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      //experience 1
      {
        company: "Auto Levels Pvt.Ltd",
        timeframe: "2022 - Present",
        role: "IT Manager & CTO",
        achievements: [
          <span key="autolevels-achievement-1">
            Developed the Auto Levels portfolio website to showcase services and projects.
          </span>,
          <span key="autolevels-achievement-2">
            Currently developing an expense/accounts management system for Auto Levels to streamline financial tracking.
          </span>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Autolevels.pk Project",
            width: 16,
            height: 9,
          },
        ],
      },
      //experience 2
      {
        company: "Internee.pk",
        timeframe: "2024",
        role: "Cyber Security Researcher",
        achievements: [
          <span key="internee-achievement-1">
            Performed comprehensive security assessments, including vulnerability scanning, penetration
            testing, and configuration compliance audits, to identify and mitigate potential security
            risks in computer systems and networks.
          </span>,
        ],
        images: [
          {
            src: "/images/projects/project-01/internee.png",
            alt: "internee.pk Project",
            width: 16,
            height: 9,
          },
        ],
      },
      //experience 3
      {
        company: "Youth Impact",
        timeframe: "2022 - 2024",
        role: "Alumni | Chapter Coordinator, 2IC Marketing & Graphics Head",
        achievements: [
          <span key="youthimpact-achievement-1">
            Spearheaded the design and execution of impactful marketing strategies, overseeing the creation of
            promotional materials to effectively communicate Youth Impact's mission and engage with target audiences.
          </span>,
          <span key="youthimpact-achievement-2">
            Led the marketing and graphics team as the 2IC Marketing & Graphics Head, ensuring the delivery of high-quality
            design work and maintaining brand consistency across all digital and print materials.
          </span>,
          <span key="youthimpact-achievement-3">
            As Chapter Coordinator, managed local chapter operations, organized community events, and facilitated educational
            workshops to support the personal and professional development of youth in the community.
          </span>,
          <span key="youthimpact-achievement-4">
            Mentored new members by providing guidance, sharing experiences, and helping them integrate into the organization
            while fostering a positive and growth-oriented environment.
          </span>,
        ],
        images: [
          {
            src: "/images/projects/project-01/youthimpact.png",
            alt: "Youth Impact Project",
            width: 16,
            height: 9,
          },
        ],
      },
      //experience 4
      {
        company: "Dar e Arqam Schools",
        timeframe: "2021",
        role: "Administrative Support Specialist",
        achievements: [
          <span key="darearqam-achievement-1">
            Managed the accounts of the fees section, ensuring accurate record-keeping and timely processing of fee payments.
          </span>,
          <span key="darearqam-achievement-2">
            Handled various office-related computer tasks, including data entry, maintaining digital records, and generating reports to support administrative operations.
          </span>,
          <span key="darearqam-achievement-3">
            Assisted in the smooth functioning of office systems by providing technical support and troubleshooting minor hardware/software issues.
          </span>,
          <span key="darearqam-achievement-4">
            Coordinated with the administrative team to streamline communication and improve the overall efficiency of office operations.
          </span>,
        ],
        images: [
        ]
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    //STUDIES SECTION
    title: "Studies",
    institutions: [
      {
        name: "Virtual University of Pakistan",
        description: <span key="study-vu">Studying Software Engineering.</span>,
      },
    ],
  },
  //TECHNICAL SKILLS SECTION
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Certifications",
    skills: [
      {
        title: "Ethical Hacker Liscense by CISCO",
        description: <>Completed comprehensive training in ethical hacking methodologies, network security, 
          and vulnerability assessment techniques. Certified by CISCO in 2023.</>,
        images: [
          {
            src: "/images/skills/ethicalhackercisco.png",
            alt: "Ethical Hacker by CISCO",
            width: 12.5,  // Actual width of the PNG in pixels
            height: 12.5,  // Actual height of the PNG in pixels
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      }, // Added missing comma here
      {
        title: "Cyber Threat Intelligence (CTI)",
        description: <>Expertise in gathering intelligence, analyzing cyber threats, and mitigating risks 
          through advanced security techniques.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cyber Security",
        description: <>Comprehensive knowledge in network security, endpoint protection, and data security.
        </>,
        images: [],
      },
      {
        title: "Linux Administration",
        description: <>Experienced in managing Linux-based systems, security configurations, and shell scripting.</>,
        images: [],
      },
      {
        title: "Networking",
        description: <>Expert in network protocols, firewalls, and secure network architectures.</>,
        images: [],
      },
      {
        title: "Digital Forensics",
        description: <>Skilled in data recovery, forensic analysis, and investigation of cyber incidents.</>,
        images: [],
      },
      {
        title: "Cryptography",
        description: <>Understanding of encryption techniques, cryptographic protocols, and secure communication.
        </>,
        images: [],
      },
      {
        title: "Metasploit",
        description: <>Proficient in using Metasploit for penetration testing and vulnerability exploitation.</>,
        images: [],
      },
      {
        title: "OWASP Security",
        description: <>Familiarity with OWASP Top 10 vulnerabilities and secure coding practices.</>,
        images: [],
      },
      {
        title: "Cyber Threat Hunting",
        description: <>Active threat detection and response to mitigate potential cyberattacks.</>,
        images: [],
      },
      {
        title: "Cyber Operations",
        description: <>Proficient in cyber warfare strategies and operational security measures.</>,
        images: [],
      },
      {
        title: "Database Management",
        description: <>Experience with MySQL, PostgreSQL, and database security.</>,
        images: [],
      },
      {
        title: "Software Development",
        description: <>Basic experience in C++, Java, and PHP for web and software applications.</>,
        images: [],
      },
      {
        title: "Web Security",
        description: <>Knowledge of web application security vulnerabilities and protective measures.</>,
        images: [],
      },
      {
        title: "Shell Scripting",
        description: <>Automating tasks and security processes using Bash and PowerShell.</>,
        images: [],
      },
      {
        title: "System Administration",
        description: <>Managing IT infrastructure, monitoring systems, and implementing security protocols.</>,
        images: [],
      },
      {
        title: "CCNA Security",
        description: <>Understanding of Cisco security principles and network hardening techniques.</>,
        images: [],
      },
      {
        title: "Technical Support",
        description: <>Providing IT support, troubleshooting, and system diagnostics.</>,
        images: [],
      },
      {
        title: "Project Management",
        description: <>Experienced in leading teams, managing projects, and executing strategic initiatives.</>,
        images: [],
      },
      {
        title: "Public Speaking & Leadership",
        description: <>Strong communication skills and leadership in cybersecurity and tech communities.</>,
        images: [],
      },
      {
        title: "Marketing Management",
        description: <>Expertise in digital marketing, branding, and strategic campaigns.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
