const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/courseCategories', (req, res) => {
    res.send(categories)
});

app.get('/courseCategories/:id', (req, res) => {
    const id = req.params.id;
    const category_news = news.filter(n => n.category_id === id);
    res.send(category_news);

})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;

    const category_news = news.filter(n => n.category_id === id);
    res.send(category_news);

})


app.listen(port, () => {
    console.log('E-learn-centre Server running on port', port);
})