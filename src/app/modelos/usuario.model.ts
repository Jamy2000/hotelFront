import { Persona } from "./persona.model";
import { TipoUsuario } from "./tipo-usuario.model";

export class Usuario {
    id?:number;
    usuario?:string;
    contrasena?:string;
    id_tipousuario?:TipoUsuario
    id_persona?:Persona
    
}
