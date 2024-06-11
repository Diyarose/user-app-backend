const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "name":String,
        "dob":String,
        "bgroup":String,
        "mob":String,
        "address":String,
        "pin":String,
        "district":String,
        "place":String,
        "email":String,
        "uname":String,
        "pass":String,
      

    }
)
let usermodel=mongoose.model("users",schema)
module.exports={usermodel}