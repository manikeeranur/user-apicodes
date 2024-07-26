import express from "express";
import {
  userDelete,
  userGet,
  userPost,
  userPut,
} from "../controllers/user.controller.js";

const route = express.Router();

route.get("/", userGet);
route.post("/", userPost);
route.put("/:id", userPut);
route.delete("/:id", userDelete);

export default route;
