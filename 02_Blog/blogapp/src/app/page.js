
import Blogs from "./components/blogs/Blogs";

// this is server component here we will call the get function 

async function getAllBlogs(){
  // here we need to give the actual or absolute if running locally then localhost will be url
  const apiResponse=await fetch('http://localhost:3000/api/fetch-data',{
    method:'GET',
    cache:'no-store',
  })

  // console.log((apiResponse));
  
  const result = await apiResponse.json();
  return result?.data;
}

export default async function Home() {
  const blogList=await getAllBlogs();
  // here we got all the blogs now we will just pass it as a prop
  // console.log(blogList);
  
  return (
    <div>
      <Blogs blogs={blogList}/>
    </div>
  );
}
