const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

app.get('/api/calendar', (req, res) => {
    res.send(
        {
        "year": "2019",
        "month": "10",
        "date": "4",
        "day": "금"
        }
    );
})

app.listen(port, () => console.log(`Listening on port ${port}`));