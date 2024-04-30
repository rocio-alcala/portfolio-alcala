import { cn } from "../../helpers";

interface ErrorsTypeProps {
  message: undefined | string;
  className?: string;
}

export default function Errors({ message, className }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className={cn("text-red-400 dark:text-red-500 text-xs", className)}>
          {message}
        </p>
      ) : null}
    </>
  );
}
