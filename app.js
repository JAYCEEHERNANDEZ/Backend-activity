import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudsRoutes.js';

const app = express();

app.use(express.json());

// const port = 4000;

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch (e) {
    console.log(e);
}

app.use('/books', bookRoutes);

app.use('/students', studentRoutes);

// app.get('/jeyc', async (request, response) => {
//     response.status(200).json({message: "Hello Im Jeyc"});
// });
