import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Recipelist({ recipes }) {
  // console.log(recipes);
  return (
    <div className="flex flex-col">
    <div className="flex items-center mt-10 justify-between px-20">
      <h1 className="text-3xl font-bold">Total Recipes</h1>
      <Link className="px-3 py-2 bg-black text-white rounded-lg" href={'/'}>Home</Link>
    </div>

  
      <div className="flex  flex-wrap gap-5 justify-center items-center mt-[5vh]">
        {recipes && recipes.length > 0
          ? recipes.map((recipe, idx) => {
              return ( <Link key={idx} href={`/recipe-list/${recipe.id}`}>
                <div key={idx} className="w-[30vw] hover:scale-[1.1] transition-all duration-200 shadow-lg cursor-pointer">
                  <Card>
                    <CardHeader>
                      <CardTitle>{recipe.name}</CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <img className="w-[100%] h-[25vh] object-cover" src={recipe.image} alt="" />
                    </CardContent>
                    <CardFooter>
                      <p>Rating: {recipe.rating} ⭐</p>
                    </CardFooter>
                  </Card>
                </div>
                </Link>
              );
            })
          : null}
      </div>

    </div>
  );
}
