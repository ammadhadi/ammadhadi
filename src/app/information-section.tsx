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
      "Relevant Coursework: Mobile Development, Web Development, Database Management, Artificial Intelligence - Agents, Software Engineering, Project Management.",
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
    title: "Freelancer Web Developer",
    date: "2023 - PRESENT",
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Technical Team Lead",
    date: "2021 - 2023",
    children:
      "I provided strong leadership by overseeing and guiding a team of highly skilled technical professionals.",
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Web Developer",
    date: "2017 - 2021",
    children:
      "Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer",
    date: "2015 - 2017",
    children:
      "Developed 10+ responsive websites for clients in a variety of industries.",
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
              <InfoCard key={idx} {...props} />
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
              <InfoCard key={idx} {...props} />
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
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
