// 'use client'

// import { useState } from "react"
// ------------------------------------------

// THIS PAGE IS TRANSFERED TO Blog component

// -------------------------------------------

// export default function blog(){
//     const [title,setTitle]=useState("")
//     const [description, setDescription]=useState("")
//     const blogData={
//         title,
//         description
//     }
//     console.log(blogData);
    

//     const handleClick= async ()=>{
        
//         try {
//             const apiResponse= await fetch('api/add-data',{
//                 method:'POST',
//                 body:JSON.stringify(blogData)
//             })
//             const result=await apiResponse.json()
//             console.log(result);
            
            
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
//     return(
//         <div className="bg-red-400 h-screen">
//             <input type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
//             <input type="text" value={description} placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} />
//             <button onClick={handleClick}>Submit</button>
//         </div>
//     )
// }

