import { DATEONLY } from 'sequelize';
import { Column, Model, PrimaryKey, Table,HasMany } from 'sequelize-typescript';
import { Booking } from './bookingModel';

@Table({tableName:"user",freezeTableName:true,underscored:true})
export class User extends Model {
  @PrimaryKey
  @Column
  nik: string;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  password: string;
  @Column
  phone: string;
  @Column
  email: string;
  @Column({type:DATEONLY})
  birthDate: string;
  @Column
  address: string;

  @HasMany(()=>Booking)
  tabel_booking: Booking[];
}