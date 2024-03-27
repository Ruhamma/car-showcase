"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";
import { updateParams } from "@/utils";
const ShowMore = ({ pageNumber, next }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const limit = (pageNumber + 1) * 10;
    const newPathName = updateParams("limit", `${limit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10 ">
      {!next && (
        <CustomButton
          title="Show more"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
