import {Server} from 'http'
import app from './app';
import mongoose from 'mongoose';
let server : Server;

const PORT = 5000;

async function main(){
    try {
        
        await mongoose.connect('mongodb+srv://mongoDB:mongoDB@cluster0.nbhtrh3.mongodb.net/note-app?retryWrites=true&w=majority&appName=Cluster0')

        server = app.listen(PORT,()=>{
            console.log(`listening port on ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}
main()