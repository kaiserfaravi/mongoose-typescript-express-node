import express, { Request, Response } from 'express'
import { User } from '../models/users.model';


export const userRouter = express.Router()

userRouter.post('/create-user', async (req: Request, res: Response) => {

    const body = req.body;


    //usersRouterroache 1

    // const myuser = new user({

    //     title:"hello mongo"
    // })
    // await myuser.save()

    //usersRouterroach 2

    const user = await User.create(body)

    res.status(201).json({
        message: "created Succesfully",
        user
    })
})


// get all users

userRouter.get('/', async (req: Request, res: Response) => {

    const users = await User.find()

    res.status(201).json({
        message: "all user data shown Succesfully",
        users
    })
})

// Get Single user

userRouter.get('/:userId', async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const user = await User.findById(userId)

    res.status(201).json({
        message: "Single user data shown Succesfully",
        user
    })
})

// update single users

userRouter.patch('/:userId', async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId,updatedBody,{new:true})

    res.status(201).json({
        message: "Single user updated Succesfully",
        user
    })
})

// delete a single data

userRouter.delete('/:userId', async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId)
    res.status(201).json({
        message: "deleted a single user data Succesfully",
        user
    })
})