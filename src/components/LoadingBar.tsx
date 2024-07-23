import { cn } from "../../helpers";

export default function LoadingBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "m-10 flex flex-1 flex-col justify-center md:m-32",
        className,
      )}
    >
      <div className="h-1 animate-[appear_2s_ease_both_infinite] bg-primary-text-light dark:bg-primary-text-dark"></div>
    </div>
  );
}
