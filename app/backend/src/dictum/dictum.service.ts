import { Injectable } from '@nestjs/common';
import { CreateDictumDto } from './dto/create-dictum.dto';
import { UpdateDictumDto } from './dto/update-dictum.dto';

@Injectable()
export class DictumService {
  create(createDictumDto: CreateDictumDto) {
    return 'This action adds a new dictum';
  }

  findAll() {
    return `This action returns all dictum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dictum`;
  }

  update(id: number, updateDictumDto: UpdateDictumDto) {
    return `This action updates a #${id} dictum`;
  }

  remove(id: number) {
    return `This action removes a #${id} dictum`;
  }
}
