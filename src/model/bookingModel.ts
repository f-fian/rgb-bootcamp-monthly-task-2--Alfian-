import { Column, Model, Table,ForeignKey,BelongsTo,HasMany} from 'sequelize-typescript';
import { Jadwal } from './jadwalModel';
import { User } from './userModel';
import { Covid19 } from './covid19Model';
import { Clinic } from './clinicModel';




@Table({tableName:"booking",freezeTableName:true})
export class Booking extends Model {
  @ForeignKey(() =>Jadwal)
  @Column
  jadwal_id: number
  @ForeignKey(() =>Clinic)
  @Column
  clinic_id: number
  @ForeignKey(() =>Covid19)
  @Column
  covid19_id: number
  @ForeignKey(() =>User)
  @Column
  nik: string
  @Column
  harga: number
  
  @BelongsTo(()=>Jadwal)
  tabel_jadwal: Jadwal
  @BelongsTo(()=>Covid19)
  tabel_covid19: Covid19
  @BelongsTo(()=>Clinic)
  tabel_clinic: Clinic  
  @BelongsTo(()=>User)
  tabel_user: User
}