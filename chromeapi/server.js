const mongoose  = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
mongoose
.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
})
.then(() => console.log('DB connection established!'));

const prot = 3000;

app.listen(port, () => {
    console.log(`App running in port ${prot}`);
})

