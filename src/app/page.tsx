// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
// import Testimonial from "./testimonial";
import ProjectSection from "./project-section";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <ProjectSection />
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
