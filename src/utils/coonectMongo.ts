//veritabanina baglanmak ve varolan baglantiyi cache e atmakicin kullanilan fonksiyon
//cachede baglanti varsa onu return et, yoksa baglanti kur


import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI as string || "mongodb://localhost:27017";
const cached:{connection?: typeof mongoose, promise?: Promise<typeof mongoose>} = {}; //cached connection ve promise degerlerini bulundurur. cacheleri kullanarak veritabanina baglantiyi tekrar tekrar kurmayi engelleriz.

const connectMongo = async (): Promise<typeof mongoose> => {
   if(!MONGODB_URI){
    throw new Error("MONGODB_URI is not defined");
   } 
   
   if(cached.connection) return cached.connection;
   
   if(!cached.promise){
    cached.promise = mongoose.connect(MONGODB_URI, {bufferCommands:false})} //normalde promise await ile kullanilir. burada promise isleme baslatilmiyor gelecekte tamamlanacak islemi temsil ediyor. 
   try{
    cached.connection = await cached.promise; //burda kullandim await i. burda baslatiyorum baglantiyi. 
   }catch(error){
    cached.promise = undefined;
    throw error;
   }
   
   return cached.connection;
}
export default connectMongo;

// promise ayni anda gelen ardarda isteklerde devreye giriyor. istekleri siraya aliyor bekletiyor 