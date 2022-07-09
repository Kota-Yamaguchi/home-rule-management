var uuid = require("node-uuid")

export function generateUUID() : String{
    return uuid.v4()
}