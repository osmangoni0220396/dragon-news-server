const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./Data/categories.json')
const news = require('./Data/news.json')
const cors = require('cors')
app.use(cors())
app.get('/', (req, res)=>{
    res.send('news api running');
});
app.get ('/news-categories', (req, res)=>{
    res.send(categories)
})
app.get ('/news', (req, res)=>{
    res.send(news)
})

app.listen(port, () => {
    console.log('dragon news server is running on ', port)
})