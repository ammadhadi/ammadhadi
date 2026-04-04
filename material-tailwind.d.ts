import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  // Fixes Typography component
  interface TypographyProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }

  // Fixes Button component (if you use it)
//   interface ButtonProps {
//     placeholder?: string;
//     onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
//     onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
//   }

  interface GenericProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }

  // Apply the fix to IconButton
  interface IconButtonProps extends GenericProps {}

  // Apply the fix to Typography (from your previous error)
  interface TypographyProps extends GenericProps {}

  // Other components frequently affected
  interface ButtonProps extends GenericProps {}
  interface InputProps extends GenericProps {}
  interface NavbarProps extends GenericProps {}
  interface CardProps extends GenericProps {}
  interface AvatarProps extends GenericProps {}
  interface SelectProps extends GenericProps {}
}
}