import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { AuthModule } from "./main/auth/auth.module";
import { UserModule } from "./main/user/user.module";



const routes : Routes = [
    
    {
        path: "auth",
        module : AuthModule
    },
    {
        path: "user",
        module : UserModule
    }
]

@Module({
    imports : [RouterModule.register(routes)],
    controllers : [],
    providers :[]
})
export class AppRouteModule{}