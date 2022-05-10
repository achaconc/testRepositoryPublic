import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";

const app = express();
const port = 1994;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/word-tagger', (req, res) => {
    const { input } = req.body;

    if(input === undefined || input === null || input.length === 0)
        return res.sendStatus(400);

    const words = input.split(' ').map((word) => ({
        word,
        tags: [
            word.length === 0 ? 'empty' : '',
            word.length < 3 ? 'short_wrd' : '',
            word.length > 3 ? 'long_word' : '',
            /\d/gm.test(word) ? 'contains_numbers' : '',
            /(?!\w|\d)./gm.test(word) ? 'contains_special_characters' : '',
            /<3/gm.test(word) ? 'contains_a_heart' : ''
        ].filter(e => e.length > 0)
    }));

    res.send({
        words
    });
})

app.listen(port, () => {
    console.log(`API listening on :${port}`);
});