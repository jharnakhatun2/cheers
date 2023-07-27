"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import Profile from "@/app/(consumer)/[profile]/page";

interface CompType {
  icon: string;
  url: string;
  value: string;
}
const data: CompType[] = [
  {
    icon: "/assets/icons/home.svg",
    value: "tab1",
    url: "/venue",
  },
  {
    icon: "/assets/icons/cart.svg",
    value: "tab2",
    url: "/checkout",
  },
  {
    icon: "/assets/icons/glass.svg",
    value: "tab3",
    url: "#",
  },
  {
    icon: "/assets/icons/customer.svg",
    value: "tab4",
    url: "/profile",
  },
];
const Tab = () => (
  <Tabs.Root className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4">
    <Tabs.List
      className="shrink-0 flex border-b border-mauve6"
      aria-label="Home"
    >
      {data.map((item, index) => {
        return (
          <Tabs.Trigger
            key={index}
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value={item.value}
          >
            <Image
              className=""
              src={item.icon}
              width={264}
              height={131}
              alt=""
            />
          </Tabs.Trigger>
        );
      })}
    </Tabs.List>
    <Tabs.Content value="tab1">
      <Profile />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Change your password here. After saving, youll be logged out.
      </p>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="currentPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Change password
        </button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default Tab;
