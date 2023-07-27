import Image from "next/image";
import Link from "next/link";

interface ComType {
  image: string;
  content: string;
  url: string;
}

const data: ComType[] = [
  {
    image: "/assets/images/visa.png",
    content: "•••• 1234",
    url: "#",
  },
  {
    image: "/assets/images/card.png",
    content: "•••• 9999",
    url: "#",
  },
  {
    image: "/assets/images/pay.png",
    content: "Apple Pay",
    url: "#",
  },
];

export default function Payment() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <div className="flex items-center gap-5 pb-10">
        <Link href="/profile">
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
        <h1 className="text-[28px] text-white text-center">Payment Methods</h1>
      </div>
      <div className="py-3">
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url}
              className="flex justify-between items-center py-4"
            >
              <div className="flex gap-4 items-center">
                <Image
                  className="object-cover w-full h-full"
                  src={item.image}
                  width={197}
                  height={35}
                  alt=""
                />
                <p className="text-white text-lg whitespace-nowrap">
                  {item.content}
                </p>
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
          );
        })}
      </div>
      <Link
        href="/add-payment"
        className="flex gap-5 items-center border-t pt-4"
      >
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
          className="lucide lucide-plus text-white"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <p className="text-white text-lg whitespace-nowrap">
          Add Payment Method
        </p>
      </Link>
    </section>
  );
}
