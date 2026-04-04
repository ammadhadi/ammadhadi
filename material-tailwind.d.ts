import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  interface GenericProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }

  // Use 'SelectProps' for the Select component
  export interface SelectProps extends GenericProps {}
  
  // These cover your previous errors
  export interface TypographyProps extends GenericProps {}
  export interface IconButtonProps extends GenericProps {}
  
  // Highly recommended: Add these now to prevent future build failures
  export interface ButtonProps extends GenericProps {}
  export interface InputProps extends GenericProps {}
  export interface NavbarProps extends GenericProps {}
  export interface CardProps extends GenericProps {}
  export interface MenuProps extends GenericProps {}
  export interface DialogProps extends GenericProps {}
  export interface AvatarProps extends GenericProps {}
}
