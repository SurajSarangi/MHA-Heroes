const PORT = process.env.PORT || 3000 ;
const express = require('express');
const info = require('./info');
const mongoose = require('mongoose');
const routes = require('./routes/heroRoutes');

const app = express();

const dbURI = 'mongodb+srv://greyKnight:mongo123@node-ninja.6awgg.gcp.mongodb.net/db1?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`)))
    .catch(err => console.log(err,'\n'));


app.set('view engine', 'ejs');

app.use((req,res,next) => {
    info(req);
    next();
});

app.use(express.static('./public'));
app.use( express.urlencoded({ extended: true }));

app.use(routes);

app.use((req,res) => res.status(404).render('404', { title : "404" }));