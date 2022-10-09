import { Column, Model, Table } from 'sequelize-typescript';
import { HasMany } from 'sequelize-typescript';
import { ClinicCovid19 } from './clinicCovid19Model';


@Table({tableName:"clinic",freezeTableName:true})
export class Clinic extends Model {
  @Column
  nama_clinic: string;

  @Column
  alamat: string;

  @Column
  telepon: number;

  @HasMany(()=>ClinicCovid19)
  tabel_clinicCovid19: ClinicCovid19[];
  
}