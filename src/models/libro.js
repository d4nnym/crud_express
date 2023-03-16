// imports 
import {Schema,model} from "mongoose"

const libroSchema = ({
  nombre: {type:String, unique: true},
  edicion: {type:Number},
  tipo: String,
  autores: [{type:Schema.Types.ObjectId, ref:"Autor"}]
},{
  versionKey: false,
  timestamps: true,
});

export default model("Libro",libroSchema)

// import 
// crear esquema 
// exportar 



