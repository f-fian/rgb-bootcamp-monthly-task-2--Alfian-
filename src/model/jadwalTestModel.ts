import { DATEONLY } from 'sequelize';
import { Column, Model,Table,ForeignKey,BelongsTo,HasMany } from 'sequelize-typescript';
import { ClinicCovid19 } from './clinicCovid19Model';
import { Booking } from './bookingModel';


@Table({tableName:"jadwaltest",freezeTableName:true})
export class JadwalTest extends Model {
    @ForeignKey(() =>ClinicCovid19)
    @Column
    clinic_covid_id: number
    @Column({type:DATEONLY})
    tanggal: Date;
    @Column
    jam: string;
    @Column
    kuota: number;
    @BelongsTo(()=>ClinicCovid19)
    tabel_clinicCovid19: ClinicCovid19
    @HasMany(()=>Booking)
    tabel: Booking[];
}