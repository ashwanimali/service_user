export function getTheDateInUnixTimeStamp(){
    return Math.floor(Date.now() / 1000)
}

export function convertTheTimeStampToDate(timestamp : any){
    return new Date(timestamp * 1000).toISOString()
}