import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Usuario = db.define('Usuario', {
    id:         {type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true},
    nombre:     {type: DataTypes.STRING},
    email:      {type: DataTypes.STRING},
    estado:     {type: DataTypes.BOOLEAN},
    // createdAt:  {type: DataTypes.DATE},
    // updateAt:   {type: DataTypes.DATE}
})


export default Usuario