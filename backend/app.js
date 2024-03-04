const express = require("express");
const pg = require("pg");
const PORT = 5000;
const cors = require('cors');
const pool = new pg.Pool({
    host: '127.0.0.1',
    database: 'postgres',
    user: 'postgres',
    password: 'suksan2705',
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
app.get("/get_students", async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT * from student;");
        res.json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching events from the database");
    } finally {
        client.release();
    }
});
app.get("/get_orgs", async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT * from organizer;");
        res.json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching events from the database");
    } finally {
        client.release();
    }
});
app.get("/get_others", async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query("SELECT * from other;");
        res.json(result.rows);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching events from the database");
    } finally {
        client.release();
    }
});
app.post("/delete_students", async (req, res) => {
    const {roll,name,dept}=req.body;
    const client = await pool.connect();
    try {
        let result = await client.query(`DELETE FROM student_event WHERE roll='${roll}';`);
        result = await client.query(`DELETE from volunteer WHERE roll='${roll}';`);
        result = await client.query(`DELETE from student WHERE roll='${roll}';`);
        res.status(200).send({messgae:"Successfully deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error fetching events from the database"});
    } finally {
        client.release();
    }
});
app.post("/delete_others", async (req, res) => {
    const {email,name,college}=req.body;
    const client = await pool.connect();
    try {
        let result = await client.query(`DELETE FROM other_event WHERE email='${email}';`);
        result = await client.query(`DELETE from other WHERE email='${email}';`);
        res.status(200).send({messgae:"Successfully deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error fetching events from the database"});
    } finally {
        client.release();
    }
});
app.post("/delete_orgs", async (req, res) => {
    const {orgid}=req.body;
    const client = await pool.connect();
    try {
        let result = await client.query(`DELETE FROM org_event WHERE orgid='${orgid}';`);
        result = await client.query(`DELETE from organizer WHERE orgid='${orgid}';`);
        res.status(200).send({messgae:"Successfully deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error fetching events from the database"});
    } finally {
        client.release();
    }
});


// app.post("/organizer_signup", (req, res) => {
//     const { name, rollNo, password } = req.body;
//     console.log(name, rollNo, password);
//     res.status(200).json({ message: "Signed in check on the way" });
// });


app.post("/register_event", async (req, res) => {
    console.log(req.body);
    const client = await pool.connect();
    try {


        const { eid, rollNo, email } = req.body;
        if (email) {
            const result = await client.query('INSERT INTO other_event (email, eid) VALUES ($1, $2)', [email, eid]);

        } else if (rollNo) {
            const result = await client.query('INSERT INTO student_event (eid, roll) VALUES ($1, $2)', [eid, rollNo]);
        }
        // console.log(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error registering for the event");
    } finally {
        client.release();
    }
    res.status(200).send({ message: "Registered for the event" });

})

app.post('/registered_events', async (req, res) => {
    const client = await pool.connect();
    try {
        const { rollNo, email } = req.body;
        if (email) {
            const result = await client.query('SELECT * from other_event where email=$1', [email]);
            res.json(result.rows);

        } else {
            const result = await client.query('SELECT * from student_event where roll=$1', [rollNo]);
            res.json(result.rows);

        }
        // res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching registered events");
    } finally {
        client.release();
    }
})

app.post('/volunteering_status', async (req, res) => {
    const client = await pool.connect();
    try {
        const { rollNo } = req.body;
        const result = await client.query('SELECT * from volunteer where roll=$1', [rollNo]);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching volunteering status");
    } finally {
        client.release();
    }
})

app.get('/volunteer_details', async (req, res) => {
    const client = await pool.connect();
    try {

        // const result = await client.query('SELECT * from volunteer;');
        //result should be select all of the join of student and volunteer tables
        const result = await client.query('SELECT * from student natural join volunteer;');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching volunteering details");
    } finally {
        client.release();
    }
})

app.post('/volunteer', async (req, res) => {
    const client = await pool.connect();
    try {
        const { rollNo } = req.body;
        const result = await client.query('INSERT INTO volunteer (roll) VALUES ($1)', [rollNo]);
        res.json({ message: "Volunteered for the event" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error volunteering for the event");
    } finally {
        client.release();
    }
})

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
})
