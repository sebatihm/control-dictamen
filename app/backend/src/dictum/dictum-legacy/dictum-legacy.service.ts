import { Injectable } from '@nestjs/common';
import { CreateDictumLegacyDto } from '../dto/legacy/create-dictum-legacy.dto';
import { UpdateDictumLegacyDto } from '../dto/legacy/update-dictum-legacy.dto'; 

@Injectable()
export class DictumLegacyService {
    create(createDictumLegacyDto: CreateDictumLegacyDto) {
        return 'This action adds a new legacy dictum';
    }

    findAll() {
        return `This action returns all legacy dictums`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} legacy dictum`;
      }
    
      update(id: number, updateDictumLegacyDto: UpdateDictumLegacyDto) {
        return `This action updates a #${id} legacy dictum`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} legacy dictum`;
      }
}
