import { Model, model, Schema } from "mongoose";
import { Iaddress, Iuser, UserInstanceMethds, UserStaticMethods } from "../interfaces/users.interfaces";
import bcrypt from 'bcrypt';

const addressSchema = new Schema<Iaddress>({
  city: { type: String },
  street: { type: String },
  zip: { type: Number },
},
{
_id:false
});


const userSchema = new Schema<Iuser,UserStaticMethods,UserInstanceMethds>({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: [true, "Email already exists"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: function (props) {
        return `${props.value} is not valid email`;
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    lowercase: true,
  },
  address: {
    type:addressSchema
  }
},{
    versionKey:false,
    timestamps:true,
}
);

userSchema.method("hashPassword",async function (plainPassword:string) {
  
  const password = await bcrypt.hash(plainPassword,10)
  return password 
})
userSchema.static("hashPassword",async function (plainPassword:string) {
  
  const password = await bcrypt.hash(plainPassword,10)
  return password 
})

userSchema.pre("save",async function(){
  this.password= await bcrypt.hash(this.password,10)
})

export const User = model<Iuser,Model<Iuser, {},UserStaticMethods ,UserInstanceMethds>>("User", userSchema);
