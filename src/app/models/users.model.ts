import { model, Schema } from "mongoose";
import { Iuser } from "../interfaces/users.interfaces";


const userSchema = new Schema<Iuser>({

    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: { 
        type: String,
         trim: true,
          required: true 
        },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        enum:['user',"admin"],
        default:"user"
    }
    
   
}
)

export const User = model<Iuser>("User", userSchema);