
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center mt-[20vh] flex-col h-[100vh] ">
      <h1 className="text-7xl font-bold mb-10">
        welcome to recipe app
      </h1>
      <Link className="px-4 py-3 rounded-lg text-2xl hover:bg-slate-700 duration-200 bg-slate-600 text-white" href={'/recipe-list'}>Explore now</Link>
    </div>
  );
}
