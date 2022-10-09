import { Column, Model, Table,ForeignKey,BelongsTo,HasMany} from 'sequelize-typescript';
import { Clinic } from './clinicModel';
import { Covid19 } from './covid19Model';
import { JadwalTest } from './jadwalTestModel';


@Table({tableName:"cc",freezeTableName:true})
export class ClinicCovid19 extends Model {

  @ForeignKey(() =>Clinic)
  @Column
  clinic_id: number

  @ForeignKey(() =>Covid19)
  @Column
  
  covid19_id: number

  @Column
  harga: number;

  @BelongsTo(()=>Clinic)
  tabel_clinic: Clinic

  @BelongsTo(()=>Covid19)
  tabel_covid19: Covid19

  @HasMany(()=>JadwalTest)
  tabel_jadwalTest: JadwalTest[];
  
}