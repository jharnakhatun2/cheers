"use client";
import Search from "@/components/ui/search";
import Image from "next/image";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { ComType, getProducts } from "@/components/products";
import { useState } from "react";

const button = [
  {
    title: "Beer",
    value: "tab1",
  },
  {
    title: "Mixed Drinks",
    value: "tab2",
  },
  {
    title: "Non Alcoholic",
    value: "tab3",
  },
];

export default function Menu() {
  const [data, setData] = useState<ComType[]>([]);
  getProducts().then((products) => {
    setData(products);
  });
  console.log(data);
  return (
    <section className="container py-8 px-5 mx-auto">
      <h1 className="text-xl text-white">Welcome! Select a Venue Below</h1>
      <div className="flex items-center gap-4 pb-2">
        <Image
          className=""
          src="/assets/icons/location-50 2.svg"
          width={18}
          height={18}
          alt=""
        />
        <div>
          <p className="text-muted">Pickup Now</p>
          <Link href="#" className="flex gap-2 items-center">
            <h1 className="text-sm text-white">Amazing Music Festival, FL</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right text-white"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
      <Search />
      {/* Tab for products */}
      <div>
        <Tabs.Root className="flex flex-col w-[300px]" defaultValue="tab1">
          <Tabs.List
            className="flex gap-2 py-5"
            aria-label="Manage your account"
          >
            {button.map((item, index) => {
              return (
                <Tabs.Trigger
                  key={index}
                  className="bg-gray text-[11px]  text-white select-none data-[state=active]:bg-primary data-[state=active]:text-background cursor-default w-[95px] py-2 rounded-full"
                  value={item.value}
                >
                  {item.title}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <Tabs.Content value="tab1">
            {data.map((item) => {
              return (
                <Link
                  href="/menu-details"
                  key={item.id}
                  className="flex gap-5 items-center py-2"
                >
                  <Image src={item.image} width={58} height={55} alt="" />
                  <div>
                    <p className="text-base text-white font-medium">
                      {item.title}
                    </p>
                    <p className="text-yellow">{item.price}</p>
                  </div>
                </Link>
              );
            })}
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <h1 className="text-xl text-white">Mixed Drinks</h1>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            {data.map((item) => {
              return (
                <div key={item.id} className="flex gap-5 items-center py-2">
                  <Image src={item.image} width={58} height={55} alt="" />
                  <div>
                    <p className="text-base text-white font-medium">
                      {item.title}
                    </p>
                    <p className="text-yellow">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
