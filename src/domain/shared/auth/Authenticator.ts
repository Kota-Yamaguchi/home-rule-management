

export interface Authenticator{
     getUserInfo(sid : String) : [ String, String]

}