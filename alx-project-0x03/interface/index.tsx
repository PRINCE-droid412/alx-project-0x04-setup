// interface/index.ts

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// From components/layouts/Layout.tsx
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
