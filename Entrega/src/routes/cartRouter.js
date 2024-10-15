import { Router } from "express";
import { addProductToCard, createCart } from "../controller/CartController.js";
import passport from "passport";

export const router=Router()

router.post("/", createCart)
router.post("/:cid/product/:pid", passport.authenticate("current", {session:false}), addProductToCard)