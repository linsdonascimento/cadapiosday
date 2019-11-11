export class cliente{
    uid:String;
    nome: string;
    email: string;
    senha:string;
    Adressuid:String;
    perfilUID: string;

}

export class Adress{
    uid:String;
    cidade:String;
    estado:String;
    descricao:String;

}

export class perfil{
    uid: string;
    description: string;
    isAdmin: boolean;
}