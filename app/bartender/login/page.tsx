import ButtonFull from "@/components/ui/button-full";
import Image from "next/image";
import Link from "next/link";

export default function LogIn() {
  return (
    <section className="container py-8 px-5">
      <Image
        className="w-[85%] mx-auto my-12"
        src="/assets/images/image 2.png"
        width={500}
        height={100}
        alt=""
      />
      <div className="col-span-full pb-3">
        <label htmlFor="venuCode" className="text-sm text-muted">
          Venue access code
        </label>
        <input
          id="venuCode"
          type="text"
          placeholder=""
          className="bg-gray w-full py-5 rounded-lg mt-1"
        />
      </div>
      <ButtonFull secondary>Login</ButtonFull>
      <ButtonFull secondary>Register your venue</ButtonFull>
    </section>
  );
}
