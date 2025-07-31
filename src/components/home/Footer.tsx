import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 gap-4">
      <h6 className="text-neutral-400 font-semibold">
        Mensura © 2025 – Built by Abhishek Kumar
      </h6>
      <div className="gap-8 flex">
        <a href="/" className="underline font-medium text-neutral-400">
          Github
        </a>
        <a href="/" className="underline font-medium text-neutral-400">
          Contact
        </a>
        <a href="/" className="underline font-medium text-neutral-400">
          Privacy Policy
        </a>
        <a href="/" className="underline font-medium text-neutral-400">
          Terms of Services
        </a>
      </div>
      <p className="text-neutral-400">
        Made with ❤️ for those who want to eat better, without stress.
      </p>
    </div>
  );
};

export default Footer;
