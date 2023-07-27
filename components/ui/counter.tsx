"use client";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState<number>(3);

  const decrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="custom-number-input h-10 w-32 mx-auto bg-gray rounded-full">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="text-white h-full w-20 rounded-r cursor-pointer"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full  font-semibold text-lg cursor-default flex items-center text-yellow"
          name="custom-input-number"
          value={value}
          readOnly
        />
        <button
          data-action="increment"
          className=" text-white h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
