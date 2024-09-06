'use client'
import { useState } from "react";

export default function Blogs() {
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
    

    const handleClick= async ()=>{
        setLoading(true)
        try {
            const apiResponse= await fetch('api/add-data',{
                method:'POST',
                body:JSON.stringify(blogData)
            })
            const result=await apiResponse.json()
            console.log(result);
            
            
        } catch (error) {
            console.log(error);
            
        }
        setLoading(false);
        if(!loading){
            setModal(false)
            setTitle("")
            setDescription("")
            alert("Blog added successfully")
        }
    }
  return (
    <div className="bg-zinc-400 h-screen w-screen py-[5vh]">
      <h1 className="text-center text-5xl font-semibold underline">My Blogs</h1>
      <div>content</div>
      <button onClick={()=>setModal(true)} className="text-2xl px-4 py-2 rounded-lg bg-green-400 fixed top-15 right-10 font-semibold">Add New Blog</button>
      {
        modal && <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-75">
        <div className="modal w-[50vw] bg-purple-300 p-5 min-h-[50vh] rounded-xl relative">
        <i onClick={()=>{setModal(false)}} class="ri-close-large-fill text-2xl right-5 top-5 absolute cursor-pointer hover:font-semibold hover:text-red-600 duration-150"></i>
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
      
    </div>
  );
}
