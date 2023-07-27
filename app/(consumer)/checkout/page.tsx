import Counter from "@/components/ui/counter";
import Counter2 from "@/components/ui/counter2";
import Image from "next/image";
import Link from "next/link";

interface ComType {
  image: string;
  title: string;
  price: string;
}

const data: ComType[] = [
  {
    image: "/assets/images/kindpng_2143969 3.png",
    title: "3 x Heineken",
    price: "18.00",
  },
  {
    image: "/assets/images/kindpng_55667 1.png",
    title: "3 x Vodka Redbull",
    price: "45.00",
  },
];

export default function Checkout() {
  return (
    <section>
      <div className="relative">
        <Image
          className=""
          src="/assets/images/050723_Tchami_Square+(3) 1.png"
          width={432}
          height={362}
          alt=""
        />
        <Link href="/" className="absolute top-6 left-5">
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
      </div>
      <div className="container py-3 px-5 mx-auto">
        <div className="flex items-center gap-2 pb-2">
          <Image
            className=""
            src="/assets/icons/location-50 2.svg"
            width={18}
            height={18}
            alt=""
          />
          <div>
            <p className="text-muted">Pickup Now</p>
            <h1 className="text-sm text-white">Brooklyn Mirage</h1>
          </div>
        </div>
        <p className="text-white text-[16px]">Your order</p>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex justify-around items-center py-2">
            <Image
              className=""
              src={item.image}
              width={19}
              height={39}
              alt=""
            />
            <h1 className="text-base text-white">{item.title}</h1>
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-yellow text-base font-medium">
                ${item.price}
              </h1>
              <Counter2 />
            </div>
          </div>
        );
      })}
      <div className="container px-5">
        <div className="text-sm text-white">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$63.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Taxes and Fees</p>
            <p>$3.43</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tip</p>
            <p>
              $12.60 <span className="text-yellow text-xs"> Edit Tip</span>
            </p>
          </div>
          <div className="flex justify-between items-center text-base ">
            <p>Total</p>
            <p>$66.43</p>
          </div>
        </div>
        <Link
          href="/payment"
          className="flex justify-between items-center py-4"
        >
          <div className="flex gap-4 items-center">
            <Image
              className="object-cover w-full h-full"
              src="/assets/images/pay.png"
              width={197}
              height={35}
              alt=""
            />
            <p className="text-white text-lg whitespace-nowrap">Apple Pay</p>
          </div>
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
        <button className="text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-lg capitalize w-full py-4">
          Complete Order
        </button>
      </div>
    </section>
  );
}
