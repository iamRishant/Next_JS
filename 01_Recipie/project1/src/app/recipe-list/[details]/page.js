import Link from "next/link";

const callSingleRecipe= async(id)=>{
    try {
        const apiResponse=await fetch(`https://dummyjson.com/recipes/${id}`);
        const data=await apiResponse.json();

        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export default async function singleRecipe({params}){
    const singleRecipe=await callSingleRecipe(params.details);
    // console.log(singleRecipe);
    
    return (
        <div className="main h-screen w-screen bg-slate-400 pt-20 relative">
        <div className="flex gap-5 absolute top-5 right-[8vw]">

            <Link href={'/'} className="px-3 py-2 bg-black text-white rounded-lg" >Home</Link>
            <Link href={'/recipe-list'} className=" px-3 py-2 bg-black text-white rounded-lg" >Go Back</Link>
        </div>
        <div className="bg-white h-[80%] w-[60%] mx-auto flex shadow-lg rounded-lg overflow-hidden">

            <div className=" left w-[50%] p-5 ">
                <img src={singleRecipe.image} alt={singleRecipe.title} className="h-full w-full object-cover hover:scale-105 transition-all duration-300"/>
            </div>
            <div className="right w-[50%] p-5 bg-slate-700 overflow-auto">
                <div className="text-white">
                    <h1 className="text-white text-3xl font-bold mb-5">{singleRecipe.name}</h1>
                    <p>Difficulty: {singleRecipe.difficulty}</p>
                    <p>Cuisine: {singleRecipe.cuisine}</p>
                    <p>Rating: {singleRecipe.rating} ⭐</p>
                    <h2 className="text-xl font-semibold my-4">Ingredients</h2>
                    <ul className="flex gap-5 flex flex-wrap leading-[3px]">
                        {singleRecipe.ingredients.map((item,indx)=>{
                            return <li key={indx}>{indx+1} {item} ,</li>
                        })}
                    </ul>
                    <h2 className="my-4 text-2xl font-semibold">Instructions</h2>
                    <ul>
                        {singleRecipe.instructions.map((item,indx)=>{
                            return <li className="" key={indx}> {indx+1} {item}.</li>
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
        </div>
    )
}