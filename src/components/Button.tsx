import { cn } from "../../helpers";

interface ButtonSpecificPropsType {
  isLoading?: boolean;
  className?: string;
}

export default function Button({
  children,
  isLoading,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  return (
    <button
      className={cn(
        "w-full rounded disabled:opacity-30 p-3 text-center border-2 hover:border-3 tracking-widest text-sm font-semibold leading-4",
        className
      )}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? <p>LOADING...</p> : children}
    </button>
  );
}
