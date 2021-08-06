// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";

const foodstar = express();

// application middlewares
foodstar.use(express.json());
foodstar.use(express.urlencoded({ extended: false}));
foodstar.use(helmet());
foodstar.use(cors());

// Application Routes
foodstar.use("/auth", Auth);


foodstar.get("/", (req, res) => res.json({message: "Setup success"}));

foodstar.listen(4000, () =>  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
    console.log("Server is running, but database connection failed... ")
    )
);