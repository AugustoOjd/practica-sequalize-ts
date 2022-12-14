import {Request, Response} from 'express'
import Usuario from '../models/usuario'





export const getUsuarios = async (req: Request, res: Response)=>{

    const usuarios = await Usuario.findAll()

    res.json(usuarios)

}


export const getUsuario = async (req: Request, res: Response)=>{

    const { id } = req.params

    const usuario = await Usuario.findByPk(id)

    if( !usuario){
        return res.status(404).json({
            msg: 'No existe usuario con' + id
        })
    }

    res.json( usuario )
}


export const postUsuario = async (req: Request, res: Response)=>{

    const { body } = req

    try {
        
        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        })

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe usuario con email: ${body.email}`
            })
        }

        const usuario = Usuario.build(body)
        await usuario.save()

        return res.status(201).json(usuario)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


export const putUsuario = async (req: Request, res: Response)=>{

    const { id } = req.params
    const { body } = req

    try {
        
        const usuario = await Usuario.findByPk( id )

        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario no existe con id: ' + id
            })
        }

        await usuario.update( body );


        return res.status(201).json({
            msg: 'Usuario actualizado'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


export const deleteUsuario = async (req: Request, res: Response)=>{

    const { id } = req.params


    try {
        
        const usuario = await Usuario.findByPk( id )

        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario no existe con id: ' + id
            })
        }


        await usuario.update( { estado: false })

        // await usuario.destroy()


        return res.status(201).json({
            msg: 'Eliminado - cambio de estado'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


