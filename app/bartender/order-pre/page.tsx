import SearchBartender from "@/components/ui/search-bartender";
import Link from "next/link";

interface ComType {
  title: string;
  short: string;
  option: string;
}

const data: ComType[] = [
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
  {
    title: "Claude",
    short: "#69691",
    option: "Bud Light",
  },
];
export default function PreviousOrder() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <div className="flex items-center gap-20 pb-5">
        <Link href="/register-code ">
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
            className="lucide lucide-chevron-left text-white"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-[28px] text-white text-center">Register</h1>
      </div>
      <SearchBartender />
      {data.map((item, index) => {
        return (
          <div key={index} className="flex gap-5 items-center py-2">
            <div className="bg-secondary w-[58px] h-[58px] rounded-full"></div>
            <div>
              <p className="text-base text-white font-medium">{item.title}</p>
              <p className="text-yellow">{item.short}</p>
              <p className="text-primary">{item.option}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
