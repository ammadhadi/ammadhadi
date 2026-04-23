import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useRef, useState, useEffect } from "react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
  defaultOpen: boolean;
}

export function InfoCard({ icon: Icon, title, date, children, defaultOpen = true }: InfoCardProps) {

  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);

  return (
    <Card
      onMouseEnter={() => !defaultOpen && setOpen(true)}
      onMouseLeave={() => !defaultOpen && setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
      className="border border-gray-200 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-md"
    >
      <CardHeader
        className="flex items-center justify-between rounded-none"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5">
            {title}
          </Typography>
        </div>

        <IconButton className="flex-shrink-0 pointer-events-none" ripple={false}>
          <Icon
            className={`h-5 w-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </IconButton>
      </CardHeader>

      {/* Accordion Content */}
      <div
        style={{
          maxHeight: open ? `${height}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-300"
      >
        <div ref={contentRef}>
          <CardBody className="px-5 pt-2 pb-5">
            {Array.isArray(children) ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-500">
                {children.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <Typography className="font-normal text-gray-500">
                {children}
              </Typography>
            )}
          </CardBody>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;
