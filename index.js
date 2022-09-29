const express = require('express');
var bodyParser = require('body-parser');

const path = require('path')

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine("html", require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, '/pages'));

app.get('/', (req, res) => {
    if (req.query.busca == null) {
        res.render('home', {});
    } else {
        res.render('' + req.query.busca, {})
    }
});

app.get('/:slug', (req, res) => {
    res.render('atg3',{});
});



app.listen(port, () => {
    console.log("server running");
})