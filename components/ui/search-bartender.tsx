export default function SearchBartender() {
  return (
    <div className="flex gap-5 bg-gray pl-3 pr-[5px] py-1 mb-4 rounded-full text-center">
      <input
        className="text-muted font-medium font-inter focus:outline-none placeholder:text-[#a19e9e] w-full"
        placeholder="Search for users, drinks, or order numbers"
        type="text"
      />
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
        className="lucide lucide-search bg-secondary text-black rounded-full p-1"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
