import { DATEONLY } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({tableName:"user",freezeTableName:true,underscored:true})
export class User extends Model {
  @PrimaryKey
  @Column
  ktp: number;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  password: string;
  @Column
  phone: number;
  @Column
  email: string;
  @Column({type:DATEONLY})
  birthDate: string;
  @Column
  address: string;
}