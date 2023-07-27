import Image from "next/image";

export default function BartenderScan() {
  return (
    <section className="container px-3 py-6 h-screen flex flex-col justify-evenly items-center bg-[#d9d9d9]">
      <Image src="/assets/images/image 5.png" width={287} height={281} alt="" />
      <Image src="/assets/images/cam.png" width={66} height={49} alt="" />
    </section>
  );
}
