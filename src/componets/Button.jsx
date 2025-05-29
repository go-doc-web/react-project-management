import React from "react";

const Button = ({
  variant = "primery",
  text = "text",
  className = "",
  children,
  type = "button",
  ...props
}) => {
  let classes;

  const classesPrimery = `px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md`;
  const classSecondery = `text-stone-800 hover:text-stone-950"`;

  if (variant === "primery") {
    classes = classesPrimery;
  }
  if (variant === "secondery") {
    classes = classSecondery;
  }

  return (
    <button className={`${classes} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
