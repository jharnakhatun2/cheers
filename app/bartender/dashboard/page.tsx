import ButtonFull from "@/components/ui/button-full";
import ButtonLarge from "@/components/ui/button-large";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="container py-8 px-5">
      <div className="flex gap-1 items-center py-20">
        <Image
          className=""
          src="/assets/images/image 2.png"
          width={257}
          height={68}
          alt=""
        />
        <h1 className="bg-secondary font-bold text-base rounded-full px-6 py-7">
          BAR
        </h1>
      </div>
      <div>
        <ButtonLarge secondary>
          <div className="flex gap-1 items-center justify-center">
            <Image
              className=""
              src="/assets/icons/icons8-qr-code-64 1.svg"
              width={30}
              height={30}
              alt=""
            />
            Order
          </div>
        </ButtonLarge>
        <ButtonLarge outline>Previous Orders</ButtonLarge>
      </div>
    </section>
  );
}
