"use client";
import Link from "next/link";

export default function AddPayment() {
  return (
    <section className="container py-8 px-5 mx-auto">
      <div className="flex items-center gap-10 pb-5">
        <Link href="/payment">
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
        <h1 className="text-lg text-white text-center">Add Payment Methods</h1>
      </div>
      <div className="pt-5">
        <form className="container flex flex-col mx-auto space-y-5 ">
          <div className="col-span-full">
            <label htmlFor="cardNumber" className="text-sm text-muted">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder=""
              className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
            />
          </div>
          <div className="flex gap-5">
            <div className="col-span-6">
              <label htmlFor="expDate" className="text-sm text-muted">
                Exp. Date
              </label>
              <input
                id="expDate"
                type="text"
                placeholder=""
                className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="cvv" className="text-sm text-muted">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                placeholder=""
                className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="country" className="text-sm text-muted">
              Country
            </label>
            <input
              id="country"
              type="text"
              placeholder=""
              className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="zipCode" className="text-sm text-muted">
              Zip Code
            </label>
            <input
              id="zipCode"
              type="text"
              placeholder=""
              className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
