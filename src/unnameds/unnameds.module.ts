import { Module } from '@nestjs/common';
import { unnamedsService } from './unnameds.service';
import { unnamedsController } from './unnameds.controller';
import { DocumentunnamedPersistenceModule } from './infrastructure/persistence/document/document-persistence.module';

@Module({
  imports: [
    // import modules, etc.
    DocumentunnamedPersistenceModule,
  ],
  controllers: [unnamedsController],
  providers: [unnamedsService],
  exports: [unnamedsService, DocumentunnamedPersistenceModule],
})
export class unnamedsModule {}
