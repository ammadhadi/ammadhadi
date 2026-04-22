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
  price: string;
}

export function ProjectCard({
  img,
  href,
  name,
  price,
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

            {/* RIGHT: PRICE */}
            <Typography
              className="font-normal text-gray-500 text-right"
            >
              {price}
            </Typography>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}

const CONTENTS = [
  {
    img: "/works/DingDong-Web.jpg",
    href: "https://dindo.eu1.online-webcam.net/",
    name: "Dating Web App",
    price: "Java, MySQL, HTML, CSS, Javascript, Jquery"
  },
  {
    img: "/works/KassandraElements-Web.jpg",
    href: "https://kassandraelements.com/",
    name: "Medical & Learning Platform",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/BinSadiq-Web.jpeg",
    href: "https://binsadiqgroup.com.pk/",
    name: "Real Estate Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/LifeCareService-Web.png",
    href: "https://www.lifecareservicesaustralia.com.au/",
    name: "Health Care Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/NobleCare-Web.png",
    href: "https://noblecaresupportservices.com.au/",
    name: "Health Care Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/KeysOperation-Web.png",
    href: "https://keysoperation.com/",
    name: "Coaching Business Web",
    price: "Wordpress, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/Alasary-Web.JPG",
    href: "https://alasary.com/",
    name: "Woodedn, Arts & Craft Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/Forstertaree-Web.png",
    href: "https://forstertareecranes.com/",
    name: "---- Web",
    price: "Wordpress, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/PeoplesPhone-Web.jpg",
    href: "https://peoplesphone.co.uk/compare/",
    name: "Mobile Carrier E-Commerce Web",
    price: "Wordpress, Third Party API Integration, Customization, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/HopeChemicals-Web.png",
    href: "https://hopechemicals.com.pk/",
    name: "Chemical E-Commerce Web",
    price: "Wordpress, Elementor, WooCommerce, Custom CSS, Custom Js"
  },
  {
    img: "/works/AquaCargo-Web.png",
    href: "https://aquacargologistics.com/",
    name: "Cargo Logistics Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/MsTechnical-Web.jpeg",
    href: "#",
    name: "Techical Service Web",
    price: "Wordpress, Elementor, Custom CSS, Custom Js"
  },
  {
    img: "/works/FloRide-Mobile-Web.jpg",
    href: "#",
    name: "RIde Hailing Web & Mobile App",
    price: "Laravel, MySQL, Reactjs, Firebase, Google APIs, Java, React Native"
  },
  {
    img: "/works/Dynamatics-V2-Web.jpeg",
    href: "#",
    name: "Influencer Platform",
    price: "Laravel, MySQL, Vuejs, Third Party APIs like agora"
  },
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
          {CONTENTS.map(({ img, href, name, price }, index) => (
            <ProjectCard
              key={index}
              img={img}
              href={href}
              name={name}
              price={price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;