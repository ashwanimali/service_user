import { Schema ,model} from "mongoose";
import schemaOption from "src/config/schema.config";
import { base_schema } from "./base.model";



 const ReqResLogModel = new Schema(
    {
        request_id: { type: String, required: true, trim: true, index: true },
        request_url: { type: String, required: true, trim: true },
        request_ip: { type: String, required: true, trim: true },
        request_body: { type: String, required: true, trim: true },
        request_header: { type: String, required: true, trim: true },
        response: { type: String, required: true, trim: true },
    },
    schemaOption
).add(base_schema)

export default model('ReqResLog',ReqResLogModel,'req_res_logs')