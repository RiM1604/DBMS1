const express = require("express");
const pg = require("pg");
const PORT = 5000;
const cors = require('cors');
const pool = new pg.Pool({
    host: '127.0.0.1',
    database: 'postgres',
    user: 'postgres',
    password: 'Ritesh@123',
    port: '5432'
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./routes/SignUp'));
app.use(require('./routes/Login'));

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/get_events", async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT * from event;");
        console.log(result.rows);
        res.json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching events from the database");
    } finally {
        client.release();
    }
});



// app.post("/organizer_signup", (req, res) => {
//     const { name, rollNo, password } = req.body;
//     console.log(name, rollNo, password);
//     res.status(200).json({ message: "Signed in check on the way" });
// });

app.post("/admin_signup", (req, res) => {
    const { name, rollNo, password } = req.body;
    console.log(name, rollNo, password);
    res.status(200).json({ message: "Signed in check on the way" });
});

app.post("/other_signup", (req, res) => {
    const { name, rollNo, password } = req.body;
    console.log(name, rollNo, password);
    res.status(200).json({ message: "Signed in check on the way" });
})


app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
})
