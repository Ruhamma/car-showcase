"use client";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import Image from "next/image";
import { updateParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathname = updateParams(title, e.value.toLowerCase());

    router.push(newPathname, { scroll: false });
  };
  return (
    <div className="w-fit ">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn cursor-pointer">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="up-down icon"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `${
                      active ? "text-white bg-primary-amber" : "text-gray-900"
                    } cursor-pointer select-none relative py-2 px-4`
                  }
                >
                  {({ selected }) => (
                    <div>
                      <span className="block truncate">{option.title}</span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
