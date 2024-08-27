import Recipelist from "@/components/Recipelist/Recipelist";

// this will be server component so we will fetch data here and pass on to recipelist component 

const recipelist=async ()=>{
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data=await apiResponse.json();
        // console.log(data.recipes);
        
        return data?.recipes;
    } catch (error) {
        throw new Error(error)
    }
}

export default async function Recipes(){
    const recipes=await recipelist();
    // console.log(recipes);
    
    
    return <Recipelist recipes={recipes}/>
}