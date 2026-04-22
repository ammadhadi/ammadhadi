"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h3" color="blue-gray">
            Connect & Hire Me for  <br/>
            IT, Automation, AI, Digital & Social Assistance & Services
          </Typography>
          <Typography
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-justify font-normal text-gray-500"
          >
            Versatile IT Professional with extensive experience across the full software development lifecycle, specializing in both frontend and backend programming. Proven track record in executing end-to-end ERP implementations and providing high-level application support to ensure seamless business operations. Skilled in data analytics, leveraging complex datasets to generate actionable insights and optimize system performance. A proactive problem-solver adept at managing diverse technical environments and delivering integrated solutions that align technical architecture with organizational goals.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.linkedin.com/in/ammad-hadi-ehsan-a32032a0/"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-linkedin text-lg" />
                </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.facebook.com/virtualpro.ather"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-facebook text-lg" />
                </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.instagram.com/my_ammad/"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-instagram text-lg" />
                </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.youtube.com/@virtualpro3180"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-youtube text-lg" />
                </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://github.com/ammadhadi/"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-github text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://stackoverflow.com/users/20964432/ammad-hadi-ehsan"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-stack-overflow text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://ammadhadi.vercel.app/"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-solid fa-globe text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.fiverr.com/iqra_noor_ehsan/"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-ravelry text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.upwork.com/freelancers/~01e4dc9a1b6a12bd34"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-ups text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.freelancer.com/u/ammadhadi"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-codepen text-lg" />
                  </Typography>
            </IconButton>
            <IconButton variant="text" color="gray">
              <Typography
                  as="a"
                  href="https://www.guru.com/freelancers/virtualpro-active"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fa-brands fa-grunt text-lg" />
                  </Typography>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
