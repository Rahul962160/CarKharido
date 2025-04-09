import React from "react";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white p-4 shadow-xl border-b border-blue-300 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Car Kharido</span>. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 hover:underline cursor-pointer transition">
          Built with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
