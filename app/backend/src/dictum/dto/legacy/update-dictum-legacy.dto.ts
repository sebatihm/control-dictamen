import { PartialType } from '@nestjs/mapped-types';
import { CreateDictumLegacyDto } from './create-dictum-legacy.dto';

export class UpdateDictumLegacyDto extends PartialType(CreateDictumLegacyDto) {}