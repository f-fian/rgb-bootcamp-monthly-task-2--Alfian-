import { Column, Model, Table,HasMany} from 'sequelize-typescript';
import { ClinicCovid19 } from './clinicCovid19Model';


@Table({tableName:"covid19",freezeTableName:true})
export class Covid19 extends Model {
  @Column
  nama_test: string;

  @Column
  deskripsi: string;

  @Column
  harga: number;

  @HasMany(()=>ClinicCovid19)
  tabel_clinicCovid19: ClinicCovid19[];
}