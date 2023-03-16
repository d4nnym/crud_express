import Autor from "../models/autor.js"

// funcion crear 
export const crearAutor = async (req,res)=>{
  const autor = new Autor(req.body);
  await autor.save();

  res.json({respuesta:"Se creó correctamente"});
}

// funcion obtener todos autores
export const obtenerAutores = async(req,res)=>{
  const autor = await Autor.find();
  res.json(autor);
}

// funcion obtener autor 
export const obtenerAutor = async (req,res)=>{
  const {id} = req.params

  const autor = await Autor.findById(id);
  return res.json(autor);
}

// funcion eliminar autor 
export const eliminarAutor = (req,res)=>{
  
  return res.json({})
}

// funcion actualizar 

export const actualizarAutor = (req,res)=>{

  return res.json({})
}