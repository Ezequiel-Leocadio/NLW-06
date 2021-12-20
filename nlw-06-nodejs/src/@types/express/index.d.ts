interface User {
    id:string;
    admin:boolean
}
declare namespace Express{
    export interface Request{
        user:User
    }
}