import express from "express";

const PORT =5000;
const DB_URL = 'mongodb+srv://nurla:<4774575n>@cluster0.wycu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('Server is workoing')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Connected on port'))
    } catch (e) {
        console.log(e)
    }
}

app.listen(PORT, () => console.log('server listening on port' + PORT))