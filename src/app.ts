import express, { Application, request, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { Note } from './app/models/notes.model';
import { notesRouter } from './app/controllers/notes.controller';
import { userRouter } from './app/controllers/users.controller';

const app: Application = express()
app.use(express.json())



app.use("/notes",notesRouter)
app.use('/users',userRouter)

app.get("/", (req: Request, res: Response) => {
    console.log("Welcome to note APP");
    res.end("Welcome to note App")
})




export default app;