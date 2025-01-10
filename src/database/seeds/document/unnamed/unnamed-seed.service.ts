import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { unnamedSchemaClass } from '../../../../unnameds/infrastructure/persistence/document/entities/unnamed.schema';

@Injectable()
export class unnamedSeedService {
  constructor(
    @InjectModel(unnamedSchemaClass.name)
    private readonly model: Model<unnamedSchemaClass>,
  ) {}

  async run() {
    const count = await this.model.countDocuments();

    if (count === 0) {
      const data = new this.model({});
      await data.save();
    }
  }
}
