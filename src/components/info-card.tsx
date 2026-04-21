import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState } from "react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
  defaultOpen: boolean;
}

export function InfoCard({ icon: Icon, title, date, children, defaultOpen = true }: InfoCardProps) {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card onMouseEnter={() => !defaultOpen && setOpen(true)}
      onMouseLeave={() => !defaultOpen && setOpen(false)}
      onClick={() => setOpen(prev => !prev)}
      className="transition-all duration-300 cursor-pointer">
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
        </div>
        <IconButton className="flex-shrink-0 pointer-events-none" ripple={false}>
          <Icon
            className={`h-5 w-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </IconButton>
      </CardHeader>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CardBody className="grid justify-start !px-3.5 pt-2">
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
    </Card>
  );
}

export default InfoCard;
