const express = require('express');
const router = express.Router();
const pg = require("pg");
const pool = new pg.Pool({
    host: '127.0.0.1',
    database: 'postgres',
    user: 'postgres',
    password: 'Ritesh@123',
    port: '5432'
})

router.post("/student_signup",async (req, res) => {
    const { name, rollNo, password,dept } = req.body;
    const client = await pool.connect();
    try {
        const result =await client.query( `INSERT INTO student VAlUES ('${rollNo}','${name}','${dept}','${password}')`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    res.status(200).json({ message: "Succesfully signed up." });
})

router.post("/organizer_signup",async (req, res) => {
    const { organizerID, password } = req.body;
    const client = await pool.connect();
    try {
        const result =await client.query( 'INSERT INTO organizer(orgid, password) VALUES ($1, $2)',[organizerID, password]);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    res.status(200).json({ message: "Succesfully signed up." });
})
router.post("/admin_signup",async (req, res) => {
    const { adminID, password } = req.body;
    const client = await pool.connect();
    try {
        const result =await client.query( 'INSERT INTO admin(aid, password) VALUES ($1, $2)',[adminID, password]);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    res.status(200).json({ message: "Succesfully signed up." });
})
router.post("/other_signup", async (req, res) => {
    const { name, collegeName, email , password } = req.body;
    const client = await pool.connect();
    try {
        const result =await client.query( `INSERT INTO other VAlUES ('${email}','${password}','${name}','${collegeName}')`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    res.status(200).json({ message: "Succesfully signed up." });
})



module.exports = router;