import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Nav = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car-logo1.svg"
            alt="Auto Exhibit Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-amber bg-white rounded-full px-6 py-2"
        />
      </nav>
    </header>
  );
};

export default Nav;
