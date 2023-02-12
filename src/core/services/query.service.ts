import { Injectable } from '@nestjs/common';

@Injectable()
export class QueryService {
  create({ modelName, data }): Promise<any> {
    return modelName.create(data);
  }

  aggregate({ modelName, pipeline }): Promise<any> {
    return modelName.aggregate(pipeline);
  }

  find({
    condition = {},
    modelName,
    project = {},
    populate = '',
    skip = 0,
    limit = 20,
    withCount = '1',
    sort,
  }): Promise<any> {
    const query = modelName.find(condition, project);
    if (Object.keys(populate).length) query.populate(populate);
    if (sort) {
      const sortArray = sort.split(':');
      query.sort({ [sortArray[0]]: sortArray[1] });
    }
    if (skip) query.skip(skip);
    if (limit) query.limit(limit);
    return query.exec().then(async (result) => {
      if (withCount == '1') {
        const total = await modelName.find(condition).count();
        return Promise.resolve({ result, total });
      }
      return Promise.resolve(result);
    });
  }

  findOne({ modelName, condition, project = {}, populate = '' }): Promise<any> {
    const query = modelName.findOne(condition, project);
    if (Object.keys(populate).length) query.populate(populate);
    return query.exec();
  }

  update({ modelName, data, id = '', query = {} }): Promise<any> {
    if (Object.keys(query).length) {
      return modelName.updateMany(query, data);
    }
    return modelName.updateOne({ _id: id }, data);
  }

  delete({ modelName, id = '', query = {} }): Promise<any> {
    let updateData = { isDeleted: true, deletedAt: Date.now() };
    if (Object.keys(query).length) {
      return modelName.updateMany(query, updateData);
    }
    return modelName.updateOne({ _id: id }, updateData);
  }
}
