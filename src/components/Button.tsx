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
        "w-full rounded p-3 text-center border-2 hover:bg-background-secondary-light disabled:bg-background-secondary-light dark:hover:bg-background-secondary-dark dark:disabled:bg-background-secondary-dark tracking-widest text-sm font-semibold leading-4",
        className
      )}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? <p>LOADING...</p> : children}
    </button>
  );
}
