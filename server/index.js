import e from 'express';
import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
const app = express()
const PORT = 5174

app.use(cors())


const db = mysql.createConnection({
  user: 'avtandil',
  host: 'localhost', 
  password: 'YDuF8umJ',
  database: 'userData'
})

app.post('/create',   (req, res) => {
  const name = req.body.name,
    comment = req.body.comment,
    gender = req.body.gender,
    email = req.body.email,
    phone = req.body.phone;

  db.query('INSERT INTO myusers (name, comment, gender, email, phone) VALUES (?, ?, ?, ?, ?)', [name, comment, gender, email, phone], (err, result) => {
    if(err){
      console.error(err)
      return err
    }else{
      res.send('Values inserted')
    }
  } )
})

app.listen(PORT, () => {
  console.log('yessss')
})


