import Link from "next/link";

export default function NotFound(){
    return (
        <div className="flex justify-center mt-10 gap-2 ">
            <h1 className="text-2xl">Page not found</h1>
            
            <Link className="p-3 bg-red-400 text-white rounded-xl"   href={'/'}>Go home</Link>
        </div>
    )
}