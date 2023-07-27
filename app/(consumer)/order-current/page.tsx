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
export default function CurrentOrder() {
  return (
    <section className="container py-8 px-5 mx-auto text-white">
      <h1 className="text-[20px]">Current Orders</h1>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex gap-5 py-5">
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
      <Link href="/order-past" className="flex gap-2 items-center">
        <Image
          src="/assets/icons/view-50 1.svg"
          width={17}
          height={17}
          alt=""
        />
        <h1 className="text-base text-white">View Past Orders</h1>
      </Link>
    </section>
  );
}
