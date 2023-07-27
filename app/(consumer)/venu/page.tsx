import Search from "@/components/ui/search";
import Image from "next/image";
import Link from "next/link";

interface ComType {
  image: string;
  title: string;
  short: string;
}

const data: ComType[] = [
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
  {
    image: "/assets/icons/Rectangle 28.svg",
    title: "Rave Fest",
    short: "NYC",
  },
];
export default function Venu() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <h1 className="text-xl text-white">Welcome! Select a Venue Below</h1>
      <Link href="/" className="flex items-center gap-4 pb-2">
        <Image
          className=""
          src="/assets/icons/qr-code-50 1.svg"
          width={18}
          height={18}
          alt=""
        />
        <h1 className="text-sm text-white">Scan Venue QR Code</h1>
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
      <Search />
      {data.map((item, index) => {
        return (
          <div key={index} className="flex gap-5 items-center py-2">
            <Image
              className=""
              src={item.image}
              width={60}
              height={60}
              alt=""
            />
            <div>
              <p className="text-base text-white font-medium">{item.title}</p>
              <p className="text-yellow">{item.short}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
