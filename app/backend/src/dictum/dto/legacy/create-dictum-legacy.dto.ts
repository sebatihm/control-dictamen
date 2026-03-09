export class CreateDictumLegacyDto {
    //Dictum 
    dictum_dictumNumber: string
    dictum_date: string
    dictum_type: string
    dictum_departmentId: number

    //DictumLegacy
    applicant: string
    departament_director: string
    device_folio: number
}