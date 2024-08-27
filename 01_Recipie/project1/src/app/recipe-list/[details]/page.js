
const callSingleRecipe= async(id)=>{
    try {
        const apiResponse=await fetch(`https://dummyjson.com/recipes/${id}`);
        const data=await apiResponse.json();

        console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export default async function singleRecipe({params}){
    const singleRecipe=await callSingleRecipe(params.details);
    return (
        <div className="main h-screen w-screen bg-red-400 pt-20">
        <div className="bg-black h-[80%] w-[60%] mx-auto flex">

            <div className="w-[50%] p-5">
                <img src={singleRecipe.image} alt={singleRecipe.title} className="h-full w-full object-cover"/>
            </div>
            <div></div>
        </div>
        </div>
    )
}