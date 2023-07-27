import Image from "next/image";
import Link from "next/link";

interface ComType {
  title: string;
  content?: string;
}

const data: ComType[] = [
  {
    title: "First Name",
    content: "John",
  },
  {
    title: "Last Name",
    content: "Doe",
  },
  {
    title: "Phone Number",
    content: "+1 123-456-7890",
  },
  {
    title: "Email Address",
    content: "john@example.org",
  },
  {
    title: "Update Password",
  },
];

export default function Details() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <div className="flex items-center gap-20">
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
        <h1 className="text-[28px] text-white text-center">My details</h1>
      </div>
      <div>
        <div className="my-6">
          <div className="relative flex justify-center items-center w-[130px] h-[126px] bg-white rounded-full text-background text-2xl font-bold">
            JD
            <div className="absolute bottom-0 left-3">
              <Image
                className=""
                src="/assets/icons/Component 1.svg"
                width={35}
                height={35}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y border-y">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center py-3 "
              >
                <div>
                  <p className="text-lg text-muted">{item.title}</p>
                  <h1 className="text-[20px] text-white">{item.content}</h1>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
