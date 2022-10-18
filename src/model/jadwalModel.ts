import { DATEONLY } from "sequelize";
import { Column, Model,HasMany,Table } from "sequelize-typescript";
import { Booking } from "./bookingModel";

@Table({tableName:"jadwal",freezeTableName:true})
export class Jadwal extends Model {

    @Column({type:DATEONLY})
    tanggal:string
    @Column
    jam:string

    @HasMany(()=>Booking)
    tabel_booking: Booking[];

}