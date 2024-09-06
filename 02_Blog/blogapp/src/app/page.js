import Image from "next/image";
import Link from "next/link";
import Blogs from "./components/blogs/Blogs";



export default function Home() {
  return (
    <div>
      {/* <Link href={'/blogs'}>Go</Link> */}
      <Blogs/>
    </div>
  );
}
