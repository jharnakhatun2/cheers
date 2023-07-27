import Image from "next/image";
import Link from "next/link";

interface ComType {
  image: string;
  title: string;
  date: string;
  quantity: string;
  price: string;
}

const data: ComType[] = [
  {
    image: "/assets/images/050723_Tchami_Square+(3) 1.png",
    title: "Brooklyn Mirage",
    date: "May 07, 2023",
    quantity: "3 items",
    price: "$66.43",
  },
  {
    image: "/assets/images/050723_Tchami_Square+(3) 1.png",
    title: "Brooklyn Mirage",
    date: "May 07, 2023",
    quantity: "3 items",
    price: "$66.43",
  },
  {
    image: "/assets/images/050723_Tchami_Square+(3) 1.png",
    title: "Brooklyn Mirage",
    date: "May 07, 2023",
    quantity: "3 items",
    price: "$66.43",
  },
];
export default function PastOrder() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <div className="flex items-center gap-20">
        <Link href="/order-current">
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
        <h1 className="text-[28px] text-white text-center">Past Orders</h1>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex gap-5 py-5 text-white">
            <Image src={item.image} width={70} height={70} alt="" />
            <div className="text-xs">
              <h1 className="text-base font-medium">{item.title}</h1>
              <p>{item.date}</p>
              <p>{item.quantity}</p>
              <p className="text-yellow">{item.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
