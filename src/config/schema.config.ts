import { getTheDateInUnixTimeStamp } from "./dateTime.config";

const schemaOption : any = {
    versionKey : false,
    strict : false,
    timestamps : {
        createdAt : "created_at",
        updatedAt : "updated_at",
        currentTime : () => getTheDateInUnixTimeStamp()
    }
};

export default schemaOption;