const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.static('public'));


var hits = {};
app.get('/hits/:pageId', (req, res) => {
    const pageHits = (hits[req.params.pageId]||0) +1;
    hits[req.params.pageId] = pageHits;
    res.send((pageHits).toString());
});
app.all('*', (req, res) => {res.status(404).send('Page does not exist.');});

app.listen(PORT, ()=>console.log(
    "Server started: http://localhost:" + PORT 
));
