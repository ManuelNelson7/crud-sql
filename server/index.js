const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "Bioprotece",
    host: "localhost",
    password: "bioprotece2021",
    database: "Bioprotece"
});

app.post('/register', (req, res) => {
    db.query("INSERT INTO clientes (nombre, apellido, empresa, email, password) VALUES (?,?,?,?,?))",
        [nombre, apellido, empresa, email, password],
        (err, result) => {
            console.log(err);
        }
    )
});

app.post('/login'), (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM clientes WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Wrong email/password" });
                res.send({ message: "Wrong sentence" })
            }
        }
    )
}

app.listen(PORT, () => {
    console.log("running server");
});