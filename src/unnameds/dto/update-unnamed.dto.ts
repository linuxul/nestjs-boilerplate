// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateunnamedDto } from './create-unnamed.dto';

export class UpdateunnamedDto extends PartialType(CreateunnamedDto) {}