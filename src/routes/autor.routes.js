
import {crearAutor,obtenerAutores,obtenerAutor,actualizarAutor} from  "../controllers/autor.controllers.js"
import {Router} from "express"


const router = Router();

router.post("/autor",crearAutor);
router.get("/autor",obtenerAutores);
router.get("/autor/:id",obtenerAutor);
router.put("/autor/:id",actualizarAutor);
// get
/* crear autor 
"/api/cliente 
tipo get
llamar funcion crear autor  
 */ 

export default router;