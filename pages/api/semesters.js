import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile("data/semesters.json", 'utf-8', (err, data)=> {
        // console.log(data);
        res.status(200).json(JSON.parse(data))
    })
}