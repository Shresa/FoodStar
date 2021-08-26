// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/user";
import Menu from "./API/menu";
import MailService from "./API/Mail";


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
foodstar.use("/mail", MailService);

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
foodstar.use("/auth", Auth);
foodstar.use("/restaurant", Restaurant);
foodstar.use("/food", Food);
foodstar.use("/image", Image);
foodstar.use("/order", Order);
foodstar.use("/reviews", Reviews);
foodstar.use("/user", User);
foodstar.use("/menu", Menu);

foodstar.get("/", (req, res) => res.json({message: "Setup success"}));

foodstar.listen(4000, () =>  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
    console.log("Server is running, but database connection failed... ")
    )
);