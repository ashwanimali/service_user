import { Injectable } from "@nestjs/common";



@Injectable()
export class HelperService{
    constructor(){}

    check(){
        return 'check from helper'
    }
}