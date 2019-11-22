export class cliente{
    uid: string;
    nome: string;
    email: string;
    senha: string;
    photo: string;
    Adressuid: string;
    perfilUID: string;

}

export class Adress{
    uid:string;
    cidade:string;
    estado:string;
    descricao:string;

}

export class perfil{
    uid: string;
    description: string;
    isAdmin: boolean;
}