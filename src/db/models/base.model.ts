import { Schema } from "mongoose";
import { getTheDateInUnixTimeStamp } from "src/config/dateTime.config";

export const base_schema = new Schema(
    {
        created_at: { type: Schema.Types.Mixed, index: true },
        updated_at: { type: Schema.Types.Mixed },
        isDeleted : {type : Boolean,default : false},
        deletedAt : { type : String }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            currentTime: () => getTheDateInUnixTimeStamp(),
        },
        versionKey: false
    }
)