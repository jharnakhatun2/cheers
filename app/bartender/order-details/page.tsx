import Tab from "@/components/tab";
import ButtonFull from "@/components/ui/button-full";
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
export default function OrderDetails() {
  return (
    <section className="container px-3 py-6 h-screen flex flex-col justify-between">
      <div>
        <Link href="/menu">
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
        <div className="flex flex-col items-center pb-10">
          <div className="flex justify-center items-center w-[130px] h-[126px] bg-secondary rounded-full text-background text-2xl font-bold">
            JD
          </div>
          <h1 className="text-white text-2xl font-bold text-center pt-3">
            Jahova Davidson
          </h1>
          <h3 className="text-yellow font-bold text-[20px] text-center ">
            #696969
          </h3>
        </div>
        <p className="text-white text-[16px] pb-3">Your order</p>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex gap-8 py-2">
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
      <div>
        <div className="flex justify-between items-center text-base text-white">
          <p>Total</p>
          <p>$66.43</p>
        </div>
        <ButtonFull secondary>Confirm Order</ButtonFull>
      </div>
    </section>
  );
}
