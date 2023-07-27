import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface CompType {
  outline?: boolean;
  secondary?: boolean;
}

export default function ButtonLarge({
  className,
  secondary,
  outline,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & CompType) {
  return (
    <button
      {...props}
      className={cn(
        "h-20 whitespace-nowrap px-9 text-xl w-full transition-all",
        "bg-primary text-primary font-bold my-2",
        {
          "text-primary bg-accent hover:bg-primary hover:text-accent rounded-md text-[20px] capitalize":
            outline,
          "text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-[20px] capitalize ":
            secondary,
        },
        className
      )}
    />
  );
}
