import bcrypt from "bcrypt";

export const procesaErrores=(res, error)=>{
    console.log(error);
    res.setHeader('Conten-Type','application/json');
    return res.status(500).json(
        {
            error: `Error inesperado en el servidor - Intente mas tarde, o contactenos`,
            detalle:`${error.message}`
        }
    )
}
 export const generaHash=password=>bcrypt.hashSync(password, bcrypt.genSaltSync(10))
 export const validaHash=(pass, hash)=>bcrypt.compareSync(pass, hash)