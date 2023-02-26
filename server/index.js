import express from 'express'
import mysql  from 'mysql';
import cors from 'cors'
const app = express()
const PORT = 5174

app.use(cors())
app.use(express.json())

// First you need to create a connection to the db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'avtandil',
  password: 'YDuF8umJ',
  database: 'myusers',
});

app.post('/create',   (req, res) => {
  const userName = req.body.name,
    comment = req.body.comment,
    gender = req.body.gender,
    email = req.body.email,
    phone = req.body.phone;

  
  db.query('INSERT INTO userdata (userName, comment, gender, email, phone) VALUES (?, ?, ?, ?, ?)', [userName, comment, gender, email, phone], (err, result) => {
    if(err){
      console.error(err)
      return err
    }else{
      res.send('Values inserted')
    }
  } )
})

app.get('/users', (req, res) => {
  db.query('SELECT * FROM userdata WHERE userName IS NOT NULL AND comment IS NOT NULL', (err, result) => {
    if(err){
      console.error(err)
    }else{
      res.send(result)
    }
  })
})

app.listen(PORT, () => {
  console.log('listening')
})


