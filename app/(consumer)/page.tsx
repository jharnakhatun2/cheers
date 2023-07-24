import Image from "next/image";
import Landing from "./landing";

export default function Home() {
  return (
    <div
      className="h-screen relative"
      // style={{
      //   backgroundImage: "url('/assets/images/Landing Page.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Image
        className="object-cover w-full h-full"
        src="/assets/images/Landing Page.png"
        width={800}
        height={844}
        alt=""
      />
      <div className="absolute top-0">
        <h1 className="text-secondary text-3xl font-bold font-poppins pb-3">
          Skip the line
          <br />
          at the bar
        </h1>
        <button className="bg-secondary text-xl text-background mx-20 py-1 px-5 rounded-lg">
          Login/Register
        </button>
      </div>
    </div>
  );
}
