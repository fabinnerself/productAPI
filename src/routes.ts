import { Router } from "express";
import {getAllProducts , createProd , deleteProd ,get1Prod , modProd} from "./controller"

export const router = Router();

//! mostrar todos los productos por defecto
router.get("/", getAllProducts);

//!  productos 
router.get("/products", getAllProducts);

router.get("/product/:id", get1Prod);

router.post("/product", createProd);

router.delete("/product/:id", deleteProd);

router.patch("/product/:id", modProd);