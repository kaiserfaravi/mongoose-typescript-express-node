import express, { Request, Response } from "express";
import { User } from "../models/users.model";
import z, { email } from "zod";
import bcrypt from "bcrypt";

export const userRouter = express.Router();

const createZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  age: z.number(),
  password: z.string(),
  role: z.string().optional(),
});

userRouter.post("/create-user", async (req: Request, res: Response) => {
  //usersRouterroache 1

  // const myuser = new user({

  //     title:"hello mongo"
  // })
  // await myuser.save()

  //usersRouterroach 2
  try {
    // const password = await bcrypt.hash(body.password ,10)
    // console.log(password)
    // const body = await createZodSchema.parseAsync(req.body)
    // const users = await User.create(body);
    //  body.password = password;

    const body = req.body;
    // built in and custom instamce methods
    // const user = new User(body);
    // const password = await user.hashPassword(body.password);
    // user.password = password;
    // await user.save();

    // built in and custom static methods

    // const password = await User.hashPassword(body.password)
    // console.log(password,"static password")
    // body.password=password;

    const user = await User.create(body);



    res.status(201).json({
      message: "created Succesfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "error pawa gese",
      error,
    });
  }
});

// get all users

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(201).json({
    message: "all user data shown Succesfully",
    users,
  });
});

// Get Single user

userRouter.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  res.status(201).json({
    message: "Single user data shown Succesfully",
    user,
  });
});

// update single users

userRouter.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedBody = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true });

  res.status(201).json({
    message: "Single user updated Succesfully",
    user,
  });
});

// delete a single data

userRouter.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);
  res.status(201).json({
    message: "deleted a single user data Succesfully",
    user,
  });
});
