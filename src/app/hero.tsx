"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h3" color="blue-gray">
            Profile Summary
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-justify text-gray-500 font-medium"
          >
            Versatile IT Professional with extensive experience across the full software development lifecycle, specializing in both frontend and backend programming. Proven track record in executing end-to-end ERP implementations and providing high-level application support to ensure seamless business operations. Skilled in data analytics, leveraging complex datasets to generate actionable insights and optimize system performance. A proactive problem-solver adept at managing diverse technical environments and delivering integrated solutions that align technical architecture with organizational goals.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
            
          Fiverr
          Upwork
          Freelancer
          Guru
          FB
          Insta
          Linkedin
          Youtube
          Stackoverflow
          Git
          Portfolio
          My Blog

          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
