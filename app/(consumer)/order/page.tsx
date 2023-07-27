import Image from "next/image";

export default function OrderSuccessful() {
  return (
    <section className="h-screen bg-primary flex flex-col items-center justify-center gap-2">
      <Image src="/assets/images/logo.png" width={263} height={171} alt="" />
      <Image
        className="-mt-14"
        src="/assets/images/transaction-approved-50 1.png"
        width={102}
        height={102}
        alt=""
      />
      <p className="text-[16px] font-medium">Order Successful</p>
    </section>
  );
}
