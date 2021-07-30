import express from "express";
import cors from "cors";
import helmet from "helmet";

const foodstar = express();

// application middlewares
foodstar.use(express.json());
foodstar.use(express.urlencoded({ extended: false}));
foodstar.use(helmet());
foodstar.use(cors());

foodstar.get("/", (req, res) => res.json({message: "Setup success"}));

foodstar.listen(4000, () => console.log("Server is running"));