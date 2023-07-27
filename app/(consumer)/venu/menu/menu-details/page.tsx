import Button from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import Image from "next/image";
import Link from "next/link";

export interface ComType {
  id: number;
  image: string;
  title: string;
  price: string;
}
const data: ComType = {
  id: 1,
  image: "/assets/images/kindpng_2143969 1.png",
  title: "Heineken",
  price: "$6.00",
};

export default function MenuDetails() {
  return (
    <section className="container py-8 px-5 mx-auto h-screen flex flex-col justify-between ">
      <div>
        <Link href="/menu" className="pb-10">
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
        <div className="pt-3">
          <Image
            className="mx-auto"
            src={data.image}
            width={106}
            height={223}
            alt=""
          />
          <p className="text-white text-lg whitespace-nowrap">{data.title}</p>
          <p className="text-white text-[13px] pb-8">{data.price}</p>
          <Counter />
        </div>
      </div>
      <button className="text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-lg capitalize w-full py-4 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
        </svg>
        Add 3 to cart
      </button>
    </section>
  );
}
