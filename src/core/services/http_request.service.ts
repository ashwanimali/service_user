import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";



@Injectable()
export class HttpRequestService{
    constructor(private httpService: HttpService){}

    async post({url , data, config = {}}) : Promise<any>{
        const request = this.httpService.post(url,data,config)
        return firstValueFrom(request)
        .then((res)=>{
            return res
        })
        .catch((err) =>{
            throw err;
        })
    }

    async get({url , config = {}}) : Promise<any>{
        const request = this.httpService.get(url,config)
        return firstValueFrom(request)
        .then((res)=>{
            return res
        })
        .catch((err) =>{
            throw err;
        })
    }


    // Future<void> fetchData() async {
    //     var client = new HttpClient();
    //     client.badCertificateCallback = ((X509Certificate cert, String host, int port) => true);
      
    //     var uri1 = Uri.https("www.example.com", "/path1");
    //     var uri2 = Uri.https("www.example.com", "/path2");
      
    //     var requestFutures = <Future>[
    //       client.getUrl(uri1).then((request) {
    //         request.headers.add("user-agent", "Mozilla/5.0 (compatible; MyApp/1.0)");
    //         return request.close();
    //       }).then((response) {
    //         if (response.statusCode == HttpStatus.ok) {
    //           // Do something with the response.
    //         }
    //       }),
    //       client.getUrl(uri2).then((request) {
    //         request.headers.add("user-agent", "Mozilla/5.0 (compatible; MyApp/1.0)");
    //         return request.close();
    //       }).then((response) {
    //         if (response.statusCode == HttpStatus.ok) {
    //           // Do something with the response.
    //         }
    //       }),
    //     ];
      
    //     await Future.wait(requestFutures);
    // }
}