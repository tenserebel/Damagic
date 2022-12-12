import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(DATABASE_URL);
    console.log("database connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
//try {
//  const DB_OPTIONS = {
//    dbName: "Auth"
//  }
//  await mongoose.connect(DATABASE_URL, DB_OPTIONS)
//  console.log('Connected Successfully...')
//} catch (error) {
//  console.log(error)
//}
//DATABASE_URL="mongodb://localhost:27017"
