import React, { useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = ["Home", "Resume", "Contact Us"];
const LINKS = ["Whatsapp", "Phone", "Email"];

function NavItem({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isContact = children === "Contact Us";

  // Toggle function for mobile/click interaction
  const toggleMenu = () => isContact && setIsOpen(!isOpen);

  return (
    <li className="relative w-full lg:w-auto">
      <div
        onClick={toggleMenu}
        className="flex cursor-pointer items-center justify-between gap-2 py-2 lg:py-0"
      >
        <Typography
          as="a"
          href={children === "Resume" ? "/pdf/Ammad_Hadi_Ehsan.pdf" : "#"}
          variant="paragraph"
          className="font-medium text-gray-900"
        >
          {children}
        </Typography>

        {/* Mobile Arrow Indicator */}
        {isContact && (
          <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        )}
      </div>

      {/* Responsive Dropdown Menu */}
      {isContact && isOpen && (
        <ul className={`
          flex flex-col gap-2 
          lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-48 lg:rounded-md lg:border lg:bg-white lg:p-2 lg:shadow-lg lg:z-50
          pl-4 mt-2 border-l-2 border-gray-100 lg:border-l-0 
        `}>
          {LINKS.map((link) => (
            <li key={link}>
              <Typography
                as="a"
                href={link === "Whatsapp" ? "https://wa.me/+923132537173" : (link === "Phone" ? "tel:+923132537173" : "mailto:my_ammad@yahoo.com")}
                variant="small"
                className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {link}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
        >
          Ammad Hadi Ehsan
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav}>{nav}</NavItem>
          ))}
        </ul>
        {/* <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text">Log in</Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color="gray">blocks</Button>
          </a>
        </div> */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav) => (
              <NavItem key={nav}>{nav}</NavItem>
            ))}
          </ul>
          {/* <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text">Log in</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div> */}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
