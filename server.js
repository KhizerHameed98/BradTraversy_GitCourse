const express = require("express");
const dotenv = require("dotenv");
const app = express();

const morgan = require("morgan");
const colors = require("colors");

const bootcamps = require("./routes/bootcamps");
const logger = require("./middleware/logger");

dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");

//Body Parser
app.use(express.json());

// app.use(logger);

//COnnect Database
connectDB();

// Dev logging middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount router

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT : ${PORT}`.yellow
      .bold
  );
});

//Handle unhandled Promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
