// dependency imports
import dotenv from 'dotenv';
dotenv.config();

import Express from 'express';
import mongoose from 'mongoose';
import users from './routes/api/users.js';

// Initialize App and DB
const app = Express();
const port = process.env.PORT;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('mongo connected'))
  .catch(err => console.log(err));

// Use api user routes
app.use('/api/users', users);

// hello world on home route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log('Server connected..'));