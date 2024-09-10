'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs({blogs}) {
    const [modal,setModal]=useState(false);
    const [loading,setLoading]=useState(false);
    const [title,setTitle]=useState("")
    const [description, setDescription]=useState("")
    const blogData={
        title,
        description
    }
    // lets add data to database
    // console.log(blogData);
const router=useRouter();
  useEffect(()=>{
    router.refresh();
  },[])
    

    const handleClick= async ()=>{
        setLoading(true)
        try {
            const apiResponse= await fetch('api/add-data',{
                method:'POST',
                body:JSON.stringify(blogData)
            })
            const result=await apiResponse.json()

            // console.log(result);

            if(result.success){
                setTitle("")
                setDescription("")
                alert("Blog added successfully")
                setModal(false)
                // every time data is added we will automatically refresh the page
                router.refresh();
            }
            else{
                alert(result.message)
            }

        } catch (error) {
            console.log(error);
            alert(error.message)
            return;
            
        }
        setLoading(false);
        
    }
    // delete
    const handleDelete= async (id)=>{
      try {
        const apiResponse= await fetch(`api/delete-data?id=${id}`,
        {
          method:'DELETE',
        }
        );
        const result=await apiResponse.json();
        if(result?.success){
          alert("Blog deleted successfully")
          router.refresh();
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <div className="bg-zinc-400  w-screen py-[5vh] min-h-[100vh]">
      <h1 className="text-center text-5xl font-semibold underline">My Blogs</h1>
      <button onClick={()=>setModal(true)} className="text-2xl px-4 py-2 rounded-lg bg-green-400 fixed top-15 right-10 font-semibold">Add New Blog</button>
      {
        modal && <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-75">
        <div className="modal w-[50vw] bg-purple-300 p-5 min-h-[50vh] rounded-xl relative">
        <i onClick={()=>{setModal(false)}} class="ri-close-large-fill text-2xl right-5 top-5 absolute cursor-pointer hover:font-semibold hover:text-red-600 duration-150"></i>
            <h1 className="text-2xl font-semibold underline">Add Blog</h1>
          <div className="flex flex-col gap-5  my-10">
            <input
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
              type="text"
              placeholder="title"
              className="p-3 rounded-md text-xl"
            />
            <textarea
            onChange={(e)=>{setDescription(e.target.value)}}
            value={description}
              name=""
              id=""
              rows="5"
              placeholder="Description..."
              className="p-3 rounded-md text-xl"
            ></textarea>
          </div>
        <button onClick={handleClick} className={`absolute right-10 bottom-2 bg-black text-white px-3 py-2 rounded-lg mt-4 text-xl ${loading ? "text-zinc-500":null}`}>{loading? "Saving" : "Save"}</button>
        </div>
      </div>
      }
      {
        blogs.length? <div className="mt-20 px-[5vw] flex gap-[3vw] items-center justify-start  flex-wrap">
        
        {   
            blogs.map((blog,index)=>{
                return (
                    <div className="w-[35vw] h-[30vh] bg-[#BCA9E1] p-5 rounded-md overflow-auto hover:scale-110 duration-200 shadow-lg relative">
                    <h1 className="text-4xl text-black break-words w-[50%]">{blog.title}</h1>
                    <p className="text-xl mt-3 text-wrap break-words text-black">{blog.description}</p>
                    <div className="absolute top-3  right-5 flex gap-5">
                      <button className="bg-green-400 px-4 py-2 rounded-lg text-lg hover:scale-95 duration-150 hover:font-semibold">Edit</button>
                      <button onClick={()=>{handleDelete(blog._id)}} className="bg-red-400 px-4 py-2 rounded-lg text-lg hover:scale-95 duration-150 hover:font-semibold">Delete</button>
                    </div>
                    </div>
                )
            })
        }
      </div> : <h1 className="text-5xl ml-10 mt-10">No Blogs Added Yet...</h1>
      }
      {/* <div className="mt-20 px-[5vw] flex gap-[3vw] items-center justify-start  flex-wrap">
        
        {   
            blogs.map((blog,index)=>{
                return (
                    <div className="w-[35vw] h-[30vh] bg-[#BCA9E1] p-5 rounded-md overflow-auto hover:scale-110 duration-200 shadow-lg relative">
                    <h1 className="text-4xl text-black break-words w-[50%]">{blog.title}</h1>
                    <p className="text-xl mt-3 text-wrap break-words text-black">{blog.description}</p>
                    <div className="absolute top-3  right-5 flex gap-5">
                      <button className="bg-green-400 px-4 py-2 rounded-lg text-lg hover:scale-95 duration-150 hover:font-semibold">Edit</button>
                      <button onClick={()=>{handleDelete(blog._id)}} className="bg-red-400 px-4 py-2 rounded-lg text-lg hover:scale-95 duration-150 hover:font-semibold">Delete</button>
                    </div>
                    </div>
                )
            })
        }
      </div> */}
      
    </div>
  );
}
