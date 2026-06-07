"use client"

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import Link from "next/link";

interface ProjectCardPropsType {
  img: string;
  href: string;
  name: string;
  tech: string;
}

export function ProjectCard({
  img,
  href,
  name,
  tech,
}: ProjectCardPropsType) {
  return (
    <Card shadow={false} className="border border-gray-300">
      <Link href={href} className="block">
        <CardBody className="pb-0 cursor-pointer hover:scale-[1.02] transition">
          <img src={img} alt={img} className="w-full aspect-video object-cover rounded-t-xl" />
          <div className="flex flex-col gap-1">
            {/* LEFT: NAME */}
            <Typography
              className="leading-snug"
              color="blue-gray"
              variant="h5"
            >
              {name}
            </Typography>

            <div className="flex flex-col gap-1 border-t pt-2 mt-2"></div>

            {/* RIGHT: tech */}
            <Typography
              className="font-normal text-gray-500 text-right"
            >
              {tech}
            </Typography>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}

/*
    title: "E-commerce Dashboard",
    description: "Built admin dashboard with analytics and order management",
    tech: ["React", "Node.js", "MySQL"],
    image: "/projects/dashboard.png",
    live: "https://example.com",
    github: "https://github.com/your-repo"
*/

const CONTENTS = [
  // programming and development section
  {
    img: "/works/GreenScan-Web.png",
    href: "https://greenscan.co.uk/",
    name: "Green Scan Web Platform",
    tech: "Python, Nextjs, ReactJs, NodeJs, API Development, PostgrSQL, Tailwind CSS"
  },
  {
    img: "/works/Fourd.jpeg",
    href: "https://fourd.com.au/",
    name: "Fourtify Defence",
    tech: "Dot Net Core, Nextjs, ReactJs, NodeJs, API Development, Supabase, PostgrSQL, Tailwind CSS"
  },
  {
    img: "/works/DingDong-Web.jpg",
    href: "https://dindo.eu1.online-webcam.net/",
    name: "Dating Web App",
    tech: "Java, MySQL, HTML, CSS, Javascript, Jquery"
  },
  {
    img: "/works/KassandraElements-Web.jpg",
    href: "https://kassandraelements.com/",
    name: "Medical & Learning Platform",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/BinSadiq-Web.jpeg",
    href: "https://binsadiqgroup.com.pk/",
    name: "Real Estate Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/LifeCareService-Web.png",
    href: "https://www.lifecareservicesaustralia.com.au/",
    name: "Health Care Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/NobleCare-Web.png",
    href: "https://noblecaresupportservices.com.au/",
    name: "Health Care Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/KeysOperation-Web.png",
    href: "https://keysoperation.com/",
    name: "Coaching Business Web",
    tech: "Wordpress, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/Alasary-Web.JPG",
    href: "https://alasary.com/",
    name: "Woodedn, Arts & Craft Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/Forstertaree-Web.png",
    href: "https://forstertareecranes.com/",
    name: "Heavy Machinery Supplier & Constructor Web",
    tech: "Wordpress, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/PeoplesPhone-Web.jpg",
    href: "https://peoplesphone.co.uk/compare/",
    name: "Mobile Carrier E-Commerce Web",
    tech: "Wordpress, Third Party API Integration, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/HopeChemicals-Web.png",
    href: "https://hopechemicals.com.pk/",
    name: "Chemical Products E-Commerce Web",
    tech: "Wordpress, Elementor, WooCommerce, Custom CSS, Custom Js"
  },
  {
    img: "/works/AquaCargo-Web.png",
    href: "https://aquacargologistics.com/",
    name: "Cargo Logistics Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/MsTechnical-Web.jpeg",
    href: "#",
    name: "Techical Service Web",
    tech: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/FloRide-Mobile-Web.jpg",
    href: "#",
    name: "RIde Hailing Web & Mobile App",
    tech: "Laravel, MySQL, Reactjs, Firebase, Google APIs, Java, React Native"
  },
  {
    img: "/works/Dynamatics-V2-Web.jpeg",
    href: "#",
    name: "Influencer Platform",
    tech: "Laravel, MySQL, Vuejs, Third Party APIs like agora"
  },

  // seo content writing section
  {
    img: "/image/blog2.svg",
    href: "https://www.laureapeoplessignature.com/web-designing-development/landing-page-development-agency/",
    name: "Tranforming Brands for the Digital Future",
    tech: "SEO Optimized Content, Impressive Tone, Primary & Secondary Keywords"
  },
  {
    img: "/image/blog2.svg",
    href: "https://virtualproweb.wordpress.com/category/uncategorized/",
    name: "Multiple Categories Blogs",
    tech: "SEO Optimized Content, Impressive Tone, Primary & Secondary Keywords"
  },
  {
    img: "/image/blog2.svg",
    href: "https://actofit.com/2021/06/18/5-steps-to-the-ideal-workout-diet/",
    name: "Steps to Workout for Ideal Diet",
    tech: "SEO Optimized Content, Impressive Tone, Primary & Secondary Keywords"
  },
  {
    img: "/image/blog2.svg",
    href: "https://easymedicaln.blogspot.com/2020/07/blood-supply-of-brain.html",
    name: "Blood & Brain Functions",
    tech: "SEO Optimized Content, Impressive Tone, Primary & Secondary Keywords"
  },

  // seo content writing section
  {
    img: "/image/blog2.svg",
    href: "#",
    name: "Student Evaluation",
    tech: "Academic Research, Research Publication, Research Article, Machine Learning Implementation & Methodologies"
  },
  {
    img: "/image/blog2.svg",
    href: "https://www.researchgate.net/publication/399536287_Aspect_based_Real-Time_Opinion_Mining_for_Online_Feedback_of_Products_at_AMAZON",
    name: "Aspect based Real-Time Opinion Mining for Online Feedback of Products at AMAZON",
    tech: "Academic Research, Research Publication, Research Article, Sentiment Analysis, Opinion Mining"
  },
  {
    img: "/image/blog2.svg",
    href: "https://www.researchgate.net/profile/Adnan-Ashraf/publication/380484655_Sentiment_Analysis_on_Pak-Indo_Controversies_using_Innovative_Polarities_in_Predictive_Modeling/links/663e43b97091b94e931b628e/Sentiment-Analysis-on-Pak-Indo-Controversies-using-Innovative-Polarities-in-Predictive-Modeling.pdf",
    name: "Sentiment Analysis on Pak-Indo Controversies Using Innovative Polarities in Predictive Modeling",
    tech: "Academic Research, Research Publication, Research Article, Predictive Modeling, Sentiment Analysis"
  },
  {
    img: "/image/blog2.svg",
    href: "https://virtualproweb.wordpress.com/home/blog",
    name: "Harry Potter Cultural Industry Can Attract Fans of Different Cultural Backgrounds in the World",
    tech: "Academic Research, Research Publication, Research Article, English Literature"
  }
];

export function ProjectSection() {
  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">
        <Typography className="font-medium text-lg">
          Tailored Project Search
        </Typography>
        <Typography variant="h1" className="my-4 text-4xl">
          Find What I Develop
        </Typography>
        <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Streamline your technical workflow with our intuitive navigation system. Whether you are searching for specific frameworks, API integrations, or deployment environments, find exactly what your project needs.
        </Typography>
      </div>
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {CONTENTS.map(({ img, href, name, tech }, index) => (
            <ProjectCard
              key={index}
              img={img}
              href={href}
              name={name}
              tech={tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;