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
        lowercase:true,
        unique:[true, "Email already exists"],
        validate:{
          validator:function(v){
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
         },
         message:function(props){
            return `${props.value} is not valid email`
         }    
            }

    },
    password:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:60,
    },
    role:{
        type:String,
        enum:['user',"admin"],
        default:"user",
        lowercase:true
    }
    
   
}
)

export const User = model<Iuser>("User", userSchema);