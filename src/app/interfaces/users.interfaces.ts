import { Model } from "mongoose";

export interface Iaddress {
  city: string;
  street: string;
  zip: number;
}

export interface Iuser {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  role: "user" | "admin";
  address: Iaddress;
}

export interface UserInstanceMethds{
  hashPassword(password:string):string
}

export interface UserStaticMethods extends Model<Iuser>{
  hashPassword(password:string):string
}