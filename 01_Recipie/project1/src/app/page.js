
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>
        welcome to recipe app
      </h1>
      <Link className="p-2 bg-slate-600 text-white" href={'/recipe-list'}>Explore now</Link>
    </div>
  );
}
