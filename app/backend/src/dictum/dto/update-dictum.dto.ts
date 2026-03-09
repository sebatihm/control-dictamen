import { PartialType } from '@nestjs/mapped-types';
import { CreateDictumDto } from './create-dictum.dto';

export class UpdateDictumDto extends PartialType(CreateDictumDto) {}
