import {Entity, Column, PrimaryGeneratedColumn , CreateDateColumn} from "typeorm"

@Entity({
    name : "user_info"
})
export class Account {
    @PrimaryGeneratedColumn()
    id:  number

    @Column()
    email : string

    @Column()
    password : string

    @Column()
    phonenumber :  string

    @CreateDateColumn()
    createdAt : Date

}
