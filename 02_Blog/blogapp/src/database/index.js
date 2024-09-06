import mongoose from 'mongoose';

const connectToDB = async ()=>{
    const connectionURL="mongodb+srv://iamRishant:hellopassword@database.jiwmj.mongodb.net/";

    mongoose.connect(connectionURL).then(()=> console.log("Connection to database is established")).catch((error)=>console.log(error));
   
};
export default connectToDB;