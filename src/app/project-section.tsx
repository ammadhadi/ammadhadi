"use client"

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface ProjectCardPropsType {
  img: string;
  name: string;
  price: string;
}

export function ProjectCard({
  img,
  name,
  price,
}: ProjectCardPropsType) {
  return (
    <Card shadow={false} className="border border-gray-300">
      <CardBody className="pb-0">
        <img src={img} alt={img} className="min-w-[280px] w-full" />
        <div className="flex justify-between">
          <div>
            <Typography className="mb-2" color="blue-gray" variant="h5">
              {name}
            </Typography>
            {/* <div className="mb-5 flex items-center gap-2">
              <div className="h-5 w-5 rounded border border-gray-900 bg-brown-300 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
            </div> */}
          </div>
          <Typography
            variant="h5"
            className="text-gray-600"
          >
            {price}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    img: "https://www.material-tailwind.com/image/product-4.png",
    name: "Project 1",
    price: "Wordpress"
  },
  {
    img: "https://www.material-tailwind.com/image/product-3.png",
    name: "Project 2",
    price: "Reactjs"
  },
  {
    img: "https://www.material-tailwind.com/image/product-5.png",
    name: "Project 3",
    price: "Nextjs"
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
          {CONTENTS.map(({ img, name, price }, index) => (
            <ProjectCard
              key={index}
              img={img}
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