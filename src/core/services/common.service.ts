import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { QueryService } from "./query.service";



@Injectable()
export class CommonService {
    constructor(private readonly queryService: QueryService) { }

    create = async ({modelName, body, extra = {}}) => {
        try {
            if (Array.isArray(body)) {
                const finalResult = []
                for (let i = 0; i < body.length; i++) {
                    let createBody = body[i];
                    createBody = { ...createBody, ...extra };
                    const result = await this.queryService.create({ modelName, data: createBody })
                    finalResult.push(result)
                }
                return finalResult
            } else {
                const createBody = { ...body, ...extra };
                return await this.queryService.create({ modelName, data: createBody })
            }
        } catch (error) {

        }
    }

    update = async ({ modelName, data, id ="",query ={}}) => {
        return await this.queryService.update({ modelName, data, id, query })
    }

    delete = async ({ modelName, id ="",query ={} }) => {
        return await this.queryService.delete({ modelName, id, query })
    }

    get = async ({ modelName,id="",query }) => {

        const {
            skip,limit,withCount,project,sort,rangeKey,rangeValue,...restQuery
        } = query
        if(id){
            const data = await this.queryService.findOne({
                condition : {_id : id},
                modelName,
                project
            })
            if(!data){
                throw new NotFoundException('Data Not Found')
            }
            return data;
        }
        const condition = {isDeleted : false,...restQuery }
        if(rangeKey & rangeValue){
            const rangeArray = rangeValue.split(",");
            let rangeQuery = {};
            if(rangeArray.length){
                rangeQuery = {
                    $gt : parseInt(rangeArray[0]),
                    $lt : parseInt( rangeArray[1])
                };
            } else {
                rangeQuery = {$gt : parseInt(rangeArray[0])}
            }
            condition[rangeKey] = rangeQuery;
        }

        return await this.queryService.find({ 
            condition,
            modelName,
            project,
            skip,
            limit,
            withCount,
            sort
         })
    }
}