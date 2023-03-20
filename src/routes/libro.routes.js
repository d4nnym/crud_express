import {Router} from "express"
import {crearLibro,obtenerLibros,obtenerLibrosAutores} from "../controllers/libro.controllers.js"

const router = Router();

router.post("/libro",crearLibro);
router.get("/libro",obtenerLibros);
router.get("/libro/:id",obtenerLibrosAutores);

export default router;