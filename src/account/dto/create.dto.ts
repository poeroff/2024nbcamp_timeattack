import { Expose } from "class-transformer";


export class CreateDto { 
    @Expose()
    id : number
    @Expose()
    email : string
    @Expose()
    name : string
    @Expose()
    createdAt : Date
  
    
}