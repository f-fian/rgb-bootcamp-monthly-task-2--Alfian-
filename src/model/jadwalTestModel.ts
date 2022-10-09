import { Column, Model,Table,ForeignKey,BelongsTo } from 'sequelize-typescript';
import { ClinicCovid19 } from './clinicCovid19Model';


@Table({tableName:"jadwaltest",freezeTableName:true})
export class JadwalTest extends Model {
    @ForeignKey(() =>ClinicCovid19)
    @Column
    clinic_covid_id: number

    @Column
    tanggal: Date;

    @Column
    jam: string;

    @Column
    kuota: number;

    @BelongsTo(()=>ClinicCovid19)
    tabel_clinicCovid19: ClinicCovid19  
}