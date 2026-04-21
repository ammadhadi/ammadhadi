"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Science in Computer Science - Federal Urdu University - Arts, Science & Technology",
    date: "2014",
    children:
      "Relevant Coursework: Mobile Development, Web Development, Database Management, Data Analytics, Artificial Intelligence - Agents, Software Engineering, Project Management.",
  },
  {
    icon: AcademicCapIcon,
    title: "Higher School Certificate",
    date: "2010",
    children:
      "Relevant Field: Pre-Engineering.",
  },
  {
    icon: AcademicCapIcon,
    title: "Secondary School Certificate",
    date: "2007",
    children:
      "Relevant Field: Computer Science.",
  }
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Freelancer",
    date: "2014 - PRESENT",
    children: [
      "I'm specialized in architecting enterprise systems using .NET MVC, .NET Core, PHP (Laravel & CodeIgniter), MS SQL Server, MySQL, and Python.",
      "I have expertise in building interactive, high-speed user interfaces with ReactJS, Next.js, and TypeScript.",
      "I can do customization in theme and plugin in WordPress.",
      "I have limited experience of mobile development using React Native.",
      "I can develop custom Python scripts to streamline workflows and automate repetitive business tasks.",
      "I have developed clear user manuals, installation guides, API documentation, system architecture guides, and FAQs that reduce support tickets and improve UX.",
      "I'm proficient in Research Writing, case studies, and white papers requiring deep analysis and formal formatting.",
      "I am able to write high-ranking blog posts and articles tailored for Search Engine results (On-page SEO).",
      "I can craft compelling non-academic narratives, business proposals, and creative storytelling for diverse audiences.",
      "I have proven track record in On-Page and Off-Page SEO to boost organic rankings.",
      "Data-backed Social Media Marketing strategies to increase brand engagement and conversions"
    ]
  },
  {
    icon: BriefcaseIcon,
    title: "Full Stack Software Developer @ M/s e-Tools Software Pty Ltd. (A part of M/s e-Tools Software Pty Ltd, Australia)",
    date: "August 2022 - PRESENT",
    children: [
      "Improvement, customization and development of Australia based medical & home care software such as Home Care Packages Program application, National Disability Insurance Scheme application, Humanitarian Settlement Program application and others.",
      "Improvement, customization and development of Australia based human resource staff management of providers, assign services related to aged care program, time management, send messages.",
      "Develop APIs to integrate with workforce and consumer mobile application for aged care program application.",
      "Integrate Xero with Australia based medical & home care software. Optimize SQL queries, functions, stored procedures.",
      "Convert report code-based data fetching via SQL queries. Use and integrate Aspose Library PDF / Word libraries to generate PDF / Word document.",
      "Designed and implemented Windows services to support eReporting and eDashboard functionalities, including thresholdbased email notifications, license validation, and automated updates through API integrations.",
      "Implement Microsoft Message Queuing System (MSMQ) for sending mobile messages updates to staff and consumers based on service assign and other activities.",
      "I have ability to transform raw data into actionable insights via Data Warehousing, SSRS, and MS Power BI dashboards."
    ]
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Executive @ M/s Level3bos Pvt. Ltd. (A subsidiary of M/s Mobilelink, United States - U.S.A)",
    date: "February 2022 - July 2022",
    children: [
      "Improvement, customization and development of different USA based cooperate portals.",
      "Integrate AWS email services for reports automation.",
      "Add features of time management and support chat.",
      "Implement time clock in and clock out in portals and auto clock out using Ms SQL Agents and Jobs"
    ]
  },
  {
    icon: BriefcaseIcon,
    title: "M/s Home Solutions @ (A subsidiary of M/s S. Abdulla & Co., Pakistan)",
    date: "July 2016 - February 2022",
    children: [
      "Improvement, customization and development of Desktop ERP (SCM) to Web based using ASP.NET, HTML 5, JavaScript, jQuery, AJAX, and CSS and use SSRS and Power BI for reports.",
      "Integrate existing ERP with MAK Global Payment Solutions System for Loyalty Program.",
      "Develop mobile applications for viewing items details, stock position and other tasks related to software (SCM) by scanning QR code.",
      "Develop and create stored procedures and SQL functions for Web based ERP.",
      "Develop and maintain procedures, guides, handouts, and other technical documentation as needed.",
      "Gather user requirements & reports for functional and operational services for MS Dynamics 365 Ax.",
      "Coordinate and integrate the work and efforts of the MS Dynamics Ax project implementation teams.",
      "Manage duties as IT Support Officer."
    ]
  },
  {
    icon: BriefcaseIcon,
    title: "M/s Home Solutions @ (A subsidiary of M/s S. Abdulla & Co., Pakistan)",
    date: "May 2015 - June 2016",
    children: [
      "Responding to the agreed time limits to call-outs.",
      "Work with ERP systems users and management to determine appropriate system configuration and setup.",
      "Assist ERP systems users with data conversion. Understand ERP database schema.",
      "Knowledge of business practices and procedures to design, develop and maintain automated workflow processes.",
      "Analyze and troubleshoot ERP system issues reported by end users.",
      "Design, develop and maintain reports used by technical staff and ERP systems users by using SSRS and excel.",
      "Coordinate with  users through a series of actions, either face-to-face or over the telephone, to help set up ERP systems or resolve issues."
    ]
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Executive @ M/s Level3bos Pvt. Ltd. (A subsidiary of M/s Mobilelink, United States - U.S.A)",
    date: "June 2014 - April 2015",
    children: [
      "Developed applications according to requirements.",
      "Upgrade and resolve issues as per requirement.",
      "Test and identify technical problems.",
      "Maintaining existing codebase, to include troubleshooting bugs and adding new features."
    ]
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Front-End",
    date: "Technical Skills",
    children:
      "Proficient in developing dynamic, user-centric web applications using React, AngularJS, jQuery and JavaScript, with a strong focus on building responsive interfaces through Bootstrap.",
  },
  {
    icon: FireIcon,
    title: "Back-End",
    date: "Technical Skills",
    children:
      "Extensive experience in full-stack development using .NET Core, MVC, and Next.js, alongside PHP frameworks like Laravel and CodeIgniter, to engineer dynamic web applications and high-performance APIs for integration.",
  },
  {
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:
      "Expert at crafting responsive web layouts using HTML5, CSS3, Media Queries, and Tailwind CSS, leveraging CSS Grid and Flexbox to ensure seamless cross-device performance.",
  },
  {
    icon: FireIcon,
    title: "Data Analytics",
    date: "Technical Skills",
    children:
      "Expertise in Data Analytics including database management, ETL, Python, APIs, Power BI, SSRS, and the creation of comprehensive reporting dashboards to drive data-informed decisions.",
  },
  {
    icon: FireIcon,
    title: "Artificial Intelligence & Automation",
    date: "Technical Skills",
    children:
      "Expert in leveraging Python, web drivers, and APIs to engineer sophisticated automation solutions and integrate AI-driven workflows for enhanced efficiency.",
  },
  {
    icon: FireIcon,
    title: "Social Media",
    date: "Technical Skills",
    children:
      "Strategic architect in Social Media Marketing, On-page SEO, Off-page SEO, utilizing data-driven insights and AI-powered automation to scale brand presence, optimize engagement workflows, and engineer high-conversion digital narratives.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Education & Certifications
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} defaultOpen={true} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Experience
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my experience as a professional.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} defaultOpen={false} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Skills
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Check out my technical skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} defaultOpen={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
