import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server run in porst: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo conndet fail", err);
  });

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is ready to lunch ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);

//     throw err;
//   }
// })();
