import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  unnamedSchema,
  unnamedSchemaClass,
} from '../../../../unnameds/infrastructure/persistence/document/entities/unnamed.schema';
import { unnamedSeedService } from './unnamed-seed.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: unnamedSchemaClass.name,
        schema: unnamedSchema,
      },
    ]),
  ],
  providers: [unnamedSeedService],
  exports: [unnamedSeedService],
})
export class unnamedSeedModule {}
