import Libro from "../models/libro.js"
import Autor from "../models/autor.js"


// Crear un libro y añadir un autor 
//owo

export const crearLibro = async (req,res) =>{
  const {nombre,
        edición,
        tipo,
        autores
      } = req.body

  const libro = new Libro(req.body)
  await libro.save()

  const autor = await Autor.findById(autores)
  
  autor.libros = autor.libros.concat(libro._id);
  autor.save();

  return res.json(libro);
}


// obtener todos los libros
export const obtenerLibros = async (req,res) =>{
const libros = await Libro.find(); 

return res.json(libros);

}

// obtener libros por autor
export const obtenerLibrosAutores= async (req,res)=>{
  const {id} = req.params;

  //const librosPorAutores = await Autor.findById(id).populate({path:'libros',select: "nombre edicion"}) // se debe poner la referencia, o sea el id de la coleción referenciada. 
  const librosPorAutores = await Autor.findById(id).populate('libros',{nombre:1,edicion:1}) 
  
  return res.json(librosPorAutores);

}
