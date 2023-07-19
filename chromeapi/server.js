const mongoose  = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

console.log(DB)
mongoose
.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this option to use the new Server Discovery and Monitoring engine
    useCreateIndex: true,
    useFindAndModify: false, // You may set this to false if you don't use the findAndModify functions
  })
.then(() => console.log('DB connection established!'));

const port = 3000;

app.listen(port, () => {
    console.log(`App running in port ${port}`);
})

