"use client";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import Profile from "./page";
import Checkout from "../checkout/page";
import Venu from "../venu/page";

interface CompType {
  icon: string;
  url: string;
  value: string;
}
const data: CompType[] = [
  {
    icon: "/assets/icons/home-50 1.png",
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
    icon: "/assets/icons/customer-100.svg",
    value: "tab4",
    url: "/profile",
  },
];
export default function layout() {
  return (
    <section className=" h-screen container ">
      <div>
        <Tabs.Root defaultValue="tab1">
          <Tabs.Content value="tab1">
            <Venu />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Checkout />
          </Tabs.Content>
          <Tabs.Content value="tab3"></Tabs.Content>
          <Tabs.Content value="tab4">
            <Profile />
          </Tabs.Content>
          <Tabs.List
            className="fixed bottom-0 flex gap-5 py-1 w-full"
            aria-label="venu"
          >
            {data.map((item, index) => {
              return (
                <Tabs.Trigger
                  key={index}
                  className="text-white select-none data-[state=active]:bg-accent data-[state=active]:rounded w-full cursor-default py-2 px-3"
                  value={item.value}
                >
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={33}
                    height={33}
                    alt=""
                  />
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </Tabs.Root>
      </div>
    </section>
  );
}
