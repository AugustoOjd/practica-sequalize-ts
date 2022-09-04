import {Request, Response} from 'express'

export const getUsuarios = (req: Request, res: Response)=>{

    res.json({
        msg: 'getUsuarios'
    })

}


export const getUsuario = (req: Request, res: Response)=>{

    const { id } = req.params


    res.json({
        msg: 'getusuario por id',
        id
    })
}


export const postUsuario = (req: Request, res: Response)=>{

    const { body } = req


    res.json({
        msg: 'post usuario',
        body
    })
}


export const putUsuario = (req: Request, res: Response)=>{

    const { id } = req.params
    const { body } = req


    res.json({
        msg: 'actualizar usuario por id',
        id,
        body
    })
}


export const deleteUsuario = (req: Request, res: Response)=>{

    const { id } = req.params


    res.json({
        msg: 'delete usuario por id',
        id
    })
}


