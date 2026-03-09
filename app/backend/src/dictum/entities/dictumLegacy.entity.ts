import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class DictumLegacy {
    @PrimaryColumn({type:'varchar', length: 13})
    dictum_id: string

    @Column({type:'varchar', length: 100})
    applicant: string

    @Column({type:'varchar', length: 100})
    department_director: string

    @Column({type:'int'})
    device_folio: number
}