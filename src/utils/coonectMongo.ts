//veritabanina baglanmak ve varolan baglantiyi cache e atmakicin kullanilan fonksiyon
//cachede baglanti varsa onu return et, yoksa baglanti kur


import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI as string || "mongodb://localhost:27017";
const cached:{connection?: typeof mongoose, promise?: Promise<typeof mongoose>} = {};

const connectMongo = async () => {
   if(!MONGODB_URI){
    throw new Error("MONGODB_URI is not defined");
   } 
   if(cached.connection) return cached.connection;
   if(!cached.connection){
    cached.promise = mongoose.connect(MONGODB_URI, {bufferCommands:false}) //normalde promise await ile kullanilir. burada promise isleme baslatilmiyor gelecekte tamamlanacak islemi temsil ediyor. 
   try{
    cached.connection = await cached.promise;
   }catch(error){
    cached.promise = undefined;
    throw error;
   }
   }
   return cached.connection;
}
export default connectMongo;