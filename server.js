const express= require('express')
const dotenv= require('dotenv').config()
const pageRouter= require('./routes/pageRoute')

// init
const app = express();
const port=process.env.PORT || 3000;

// data manage
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// static folder
app.use(express.static('public'))


// router init
app.use(pageRouter);


app.listen(port,(req, res) => {
    console.log(`server is running at http://localhost:${port}`);
});