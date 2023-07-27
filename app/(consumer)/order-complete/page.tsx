import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ComType {
  image: string;
  title: string;
}

const data: ComType[] = [
  {
    image: "/assets/images/kindpng_2143969 3.png",
    title: "3 x Heineken",
  },
  {
    image: "/assets/images/kindpng_55667 1.png",
    title: "3 x Vodka Redbull",
  },
];
export default function CompleteOrder() {
  return (
    <section className="h-screen container  px-2 py-2 mx-auto flex flex-col justify-between">
      <div>
        <Link href="/order" className="">
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
            className="lucide lucide-chevron-left bg-secondary text-black rounded-full"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <div className="flex gap-5 py-5 text-white">
          <Image
            src="/assets/images/050723_Tchami_Square+(3) 1.png"
            width={70}
            height={70}
            alt=""
          />
          <div className="text-xs">
            <h1 className="text-base font-medium">Brooklyn Mirage</h1>
            <p>May 07, 2023</p>
            <p>3 items</p>
            <p className="text-yellow">$66.43</p>
          </div>
        </div>
        <p className="text-[9px] text-muted">
          Go to the bar pick-up area to redeem your drinks!
        </p>
        <Image
          className="object-fit w-[90%] h-auto mx-auto"
          src="/assets/images/qr-code-40 1.png"
          width={313}
          height={306}
          alt=""
        />
        <div>
          <p className="text-white text-[16px]">Your order</p>
          {data.map((item, index) => {
            return (
              <div key={index} className="flex gap-5 items-center py-1">
                <Image
                  className=""
                  src={item.image}
                  width={19}
                  height={39}
                  alt=""
                />
                <h1 className="text-base text-white">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>

      <button className="text-primary bg-accent hover:bg-primary hover:text-accent rounded-md text-lg capitalize w-full h-12">
        View receipt
      </button>
    </section>
  );
}
