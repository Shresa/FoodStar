// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
// configs
import googleAuthConfig from "./config/google.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";

// Database connection
import ConnectDB from "./database/connection";

const foodstar = express();

// application middlewares
foodstar.use(express.json());
foodstar.use(express.urlencoded({ extended: false}));
foodstar.use(helmet());
foodstar.use(cors());
foodstar.use(passport.initialize());
foodstar.use(passport.session());


// passport cofiguration
googleAuthConfig(passport);

// Application Routes
foodstar.use("/auth", Auth);
foodstar.use("/restaurant", Restaurant);


foodstar.get("/", (req, res) => res.json({message: "Setup success"}));

foodstar.listen(4000, () =>  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
    console.log("Server is running, but database connection failed... ")
    )
);