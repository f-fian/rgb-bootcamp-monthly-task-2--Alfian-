import { Column, Model, Table } from 'sequelize-typescript';


@Table({tableName:"admin",freezeTableName:true})
export class Admin extends Model {
  @Column
  email: string;

  @Column
  password: string;
}