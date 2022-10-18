import { Column, Model, Table,ForeignKey,BelongsTo,HasMany} from 'sequelize-typescript';
import { JadwalTest } from './jadwalTestModel';
import { User } from './userModel';




@Table({tableName:"booking",freezeTableName:true,underscored:true})
export class Booking extends Model {
  @ForeignKey(() =>User)
  @Column
  nik: string
  @ForeignKey(() =>JadwalTest)
  @Column
  jadwalTestId: number
  @BelongsTo(()=>User)
  tabelUser: User
  @BelongsTo(()=>JadwalTest)
  tabelJadwalTest: JadwalTest

  
  
}