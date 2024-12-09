const express = require("express")

const app = express();
const cors=require('cors')
const port = process.env.PORT || 5001;

const categories = require('./data/categories.json');
const news = require('./data/news.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send("News Api Running")
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
});

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    if (id === "0") {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news)
    }

})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectenews = news.find(n => n._id === id)

    res.send(selectenews)
})

app.listen(port, () => {
    console.log("Dragon News server running port", port)
})