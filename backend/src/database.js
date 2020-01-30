const mongoose = require('mongoose');

const URI = process.env.URI_MONGO ? process.env.URI_MONGO : 'mongodb://localhost/gymdatabaseaux';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
});