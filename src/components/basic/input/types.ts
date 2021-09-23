import { Theme } from "../theme";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: InputVariant;
  disabled?: boolean;
  theme?: Theme;
}

export type InputVariant = 'outline' | 'filled' | 'underline';
