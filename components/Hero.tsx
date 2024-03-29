"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className=" pt-36 padding-x">
        <h1 className={`hero__title `}>
          Find,book or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle ">
          Explore a vast selection of cars with our user-friendly search
          filters. Find exactly what you need, from fuel-efficient hybrids to
          spacious SUVs.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-amber text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container ">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
