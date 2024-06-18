import express from "express";
import { buscar, buscarUno, add, update, drop } from "../controllers/user";

const router = express.Router();

router.get("/ruta", buscar);
router.get("/rutaid", buscarUno);
router.post("/ruta", add);
router.put("/ruta", update);
router.delete("/ruta", drop);
export default router;
