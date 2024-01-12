import express from 'express';
import usersRouter from './router/usersRouter.js';
import db from './ConnectDb.js';

const app = express();
app.use(express.json())

db.connect(err => {
	if(err) {
    console.log("Error is", err)
  }else{
    console.log("Connected successfully")
  }
});

app.use('/api', usersRouter)
app.listen(3306, () =>
  console.log('Example app listening on port 3000!'),
);