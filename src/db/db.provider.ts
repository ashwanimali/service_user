import mongoose from "mongoose";

export const dbProviders = [

    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<void> => {
            const db_url = process.env.db_url
            return mongoose.connect(db_url).then(() => {
                console.log('Db Connected on Port', db_url)
            }).catch((err) => {
                throw err;
            })
        }
    }
]