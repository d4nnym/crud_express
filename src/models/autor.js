import {Schema,model} from "mongoose"

const autorSchema = Schema({
  nombre: String,
  apellido: String,
  libros:[{ type: Schema.Types.ObjectId, ref: 'Libro' }]
},{
    versionKey: false,
    timestamps: true,
});

export default model("Autor",autorSchema);
