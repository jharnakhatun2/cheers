"use client";

import Link from "next/link";

export default function Register() {
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
            className="lucide lucide-chevron-left bg-secondary text-black rounded-full"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-[28px] text-white text-center">Register</h1>
      </div>
      <form className="container flex flex-col mx-auto space-y-5 ">
        <div className="col-span-full">
          <label htmlFor="firstName" className="text-sm text-muted">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder=""
            className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="lastName" className="text-sm text-muted">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder=""
            className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="dateOfBirth" className="text-sm text-muted">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="text"
            placeholder=""
            className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
          />
        </div>
        <div className="flex items-center justify-center pt-5">
          <button
            type="submit"
            className="text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-lg capitalize px-9 h-12"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
