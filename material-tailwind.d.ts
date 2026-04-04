import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  interface GenericProps {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }

  // The specific fix for your current error
  export interface CardProps extends GenericProps {}
  export interface CardHeaderProps extends GenericProps {}
  export interface CardBodyProps extends GenericProps {}
  export interface CardFooterProps extends GenericProps {}

  // Your previous fixes
  export interface TypographyProps extends GenericProps {}
  export interface IconButtonProps extends GenericProps {}
  export interface SelectProps extends GenericProps {}
  
  // Other common components to prevent future build failures
  export interface ButtonProps extends GenericProps {}
  export interface InputProps extends GenericProps {}
  export interface NavbarProps extends GenericProps {}
  export interface MenuProps extends GenericProps {}
  export interface DialogProps extends GenericProps {}
  export interface AvatarProps extends GenericProps {}
  export interface CheckboxProps extends GenericProps {}
  export interface SwitchProps extends GenericProps {}
}
