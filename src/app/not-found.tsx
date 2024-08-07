import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-poppins ">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <span className="font-bold">Return home</span>
      </Link>
    </div>
  );
}
