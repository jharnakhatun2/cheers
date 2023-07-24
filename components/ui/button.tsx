import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface CompType {
  outline?: boolean;
  secondary?: boolean;
}

export default function Button({
  className,
  secondary,
  outline,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & CompType) {
  return (
    <button
      {...props}
      className={cn(
        "h-12 whitespace-nowrap px-9 text-xl w-fit transition-all",
        "bg-primary text-primary",
        {
          "text-primary bg-accent hover:bg-primary hover:text-accent rounded-md text-lg capitalize":
            outline,
          "text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-lg capitalize":
            secondary,
        },
        className
      )}
    />
  );
}
