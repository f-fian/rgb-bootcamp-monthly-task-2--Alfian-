import { Column, Model, Table } from 'sequelize-typescript';


@Table({freezeTableName:true})
export class Clinic extends Model {
  @Column
  nama_clinic: string;

  @Column
  alamat: string;

  @Column
  telepon: number;
  
}