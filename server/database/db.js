import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.o48hzxo.mongodb.net/mern-crud-app?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to db");
  } catch (error) {
    console.log("Error while connection with db", error);
  }
};

export default connection;
