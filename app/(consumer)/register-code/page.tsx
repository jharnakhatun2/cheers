import Link from "next/link";

export default function RegisterCode() {
  return (
    <section className="container py-8 px-5">
      <div className="flex items-center gap-20">
        <Link href="/login">
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
      <p className="text-base text-muted pt-10 pb-3">
        Please enter the 4-digit security code we sent to your mobile phone to
        register
      </p>
      <div className="col-span-full">
        <input
          id="text"
          type="text"
          placeholder=""
          className="w-full rounded-lg focus:outline-none bg-gray text-muted p-4 text-sm mt-2"
        />
      </div>
      <div className="flex items-center gap-5 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-message-square-plus text-white"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="9" x2="15" y1="10" y2="10" />
          <line x1="12" x2="12" y1="7" y2="13" />
        </svg>
        <p className="text-base text-muted">Re-send the code</p>
      </div>
    </section>
  );
}
