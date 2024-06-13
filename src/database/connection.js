import mongoose from "mongoose";
export const connectToDb = async () => {
  let connection = null;

  if (connection) {
    return connection;
  }

  connection = mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mongodb connected"));
  return connection;
};
