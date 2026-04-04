import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  // Fixes Typography component
  interface TypographyProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }

  // Fixes Button component (if you use it)
  interface ButtonProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }
}