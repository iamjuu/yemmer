import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  console.log(`Rendering button with props: ${JSON.stringify(props)}`);
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button; 