"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
      >
        <span className={"flex-1"}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;