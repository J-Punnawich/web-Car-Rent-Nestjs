// Car table

import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cars"}) // entity = db table
@ObjectType()       
export class Car{        // สร้าง object car

    @PrimaryGeneratedColumn("uuid")    // id ในตาราง
    @Field()                           // ต้องใส่ไม่งั้นไม่เข้าตาราง
    id: string;

    @Column()                          // ให้เป็น column
    @Field()
    name: string;

    @Column()                         
    @Field()
    name: string;

}