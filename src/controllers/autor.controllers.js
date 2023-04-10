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
export const obtenerAutor =async  (req,res)=>{
  const {id} = req.params;

  Autor.findById(id)
  .then((content)=>{
    if(!content)
      return res.json({error:"El autor no fue encontrado"})
    return res.json(content);
  })
  .catch((error)=>{
    console.error(error);
    return res.json({error:"Ocurrió un error, inténtelo más tarde"})
  });
 
}

// funcion actualizar 
export const actualizarAutor = async (req,res)=>{
  const {id} = req.params;
  const autor = await Autor.findByIdAndUpdate({_id:id},{$set:req.body},{new:true});

  
  return res.json({request: "El dato se actualizó correctamente"});
}

// funcion eliminar autor 
export const eliminarAutor = async (req,res)=>{
  const {id} = req.params;
  const autor = await Autor.findByIdAndDelete(id);
  return res.json({respuesta:"Se eliminó correctamente"});
}




