import React from "react";
import "./Utils.css";

export function Logo({ className, ...props }) {
  return <div className={["Logo", className].join(" ")} {...props}></div>;
}

export function LogoMain({ className, ...props }) {
  return <div className={["LogoMain", className].join(" ")} {...props}></div>;
}

export function Background({ className, ...props }) {
  return <div className={["Background", className].join(" ")} {...props}></div>;
}

export function NavBar({ className, ...props }) {
  return <div className={["NavBar", className].join(" ")} {...props}></div>;
}

export function Form({ className, ...props }) {
  return <form className={["Form", className].join(" ")} {...props} />;
}

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={["Textarea", className].join(" ")} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}

export function Section({ className, list, ...props }) {
  const classes = ["Section", list && "Section--list", className]
    .filter(Boolean)
    .join(" ");
  return <section className={classes} {...props} />;
}
