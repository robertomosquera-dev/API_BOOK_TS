

type MapStatus = Record<string, number>;

export const HttpStatus:MapStatus = {
  "Continue":            100,
  "Switching Protocols": 101,
  "OK":                  200,
  "Created":             201,
  "Accepted":            202,
  "No Content":          204,
  "Partial Content":     206,
  "Moved Permanently":   301,
  "Found":               302,
  "Not Modified":        304,
  "Temporary Redirect":  307,
  "Permanent Redirect":  308,
  "Bad Request":         400,
  "Unauthorized":        401,
  "Forbidden":           403,
  "Not Found":           404,
  "Method Not Allowed":  405,
  "Request Timeout":     408,
  "Conflict":            409,
  "Gone":                410,
  "Unprocessable Entity":422,
  "Too Many Requests":   429,
  "Internal Server Error":500,
  "Not Implemented":     501,
  "Bad Gateway":         502,
  "Service Unavailable": 503,
  "Gateway Timeout":     504,
} as const;

type HttpStatusCode = typeof HttpStatus[keyof typeof HttpStatus];

export class ApiResponse <T> {

    constructor(
        private isError : boolean,
        private status : HttpStatusCode,
        private message : string,
        private body : T | null
    ){}

    static success <T> (status:HttpStatusCode,message:string,body:T) {
        return new ApiResponse <T> (false,status,message,body);
    }

    static error <T> (status:HttpStatusCode,message:string) {
        return new ApiResponse <T> (true,status,message,null);
    }

    toJSON(): object {
        return {
          isError:    this.isError,
          status:     this.status,
          message:    this.message,
          body:       this.body,
        };
    }
    
}