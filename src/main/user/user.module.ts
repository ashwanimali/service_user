import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { CoreModule } from "src/core/core.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";



@Module({
    imports: [CoreModule,JwtModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]

})
export class UserModule { }