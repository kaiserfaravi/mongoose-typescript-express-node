import express, { Request, Response } from 'express'
import { Note } from '../models/notes.model';

export const notesRouter = express.Router()

notesRouter.post('/create-note', async (req: Request, res: Response) => {

    const body = req.body;


    //notesRouterroache 1

    // const myNote = new Note({

    //     title:"hello mongo"
    // })
    // await myNote.save()

    //notesRouterroach 2

    const note = await Note.create(body)

    res.status(201).json({
        message: "created Succesfully",
        note
    })
})


// get all notes

notesRouter.get('/', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(201).json({
        message: "all data shown Succesfully",
        notes
    })
})

// Get Single Note

notesRouter.get('/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findById(noteId)

    res.status(201).json({
        message: "Single data shown Succesfully",
        note
    })
})

// update single notes

notesRouter.patch('/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId,updatedBody,{new:true})

    res.status(201).json({
        message: "Single data updated Succesfully",
        note
    })
})

// delete a single data

notesRouter.delete('/notes/:noteId', async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId)
    res.status(201).json({
        message: "deleted a single data Succesfully",
        note
    })
})