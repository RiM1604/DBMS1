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

router.post('/student_login', async (req, res) => {
    const { rollNo, password } = req.body;
    const client = await pool.connect();
    let result;
    try {
        result = await client.query(`SELECT password from student WHERE roll='${rollNo}';`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    if(result.rows.length===0){
        res.status(201).send({message:"No such user found."});
    }
    else if(result.rows[0]['password']!==password){
        res.status(202).send({message:"Wrong password."});
    }
    else{
        res.status(200).json({ message: "Succesfull login" });
    }
})

router.post('/organizer_login',async (req, res) => {
    const { organizerID, password } = req.body;
    const client = await pool.connect();
    let result;
    try {
        result = await client.query(`SELECT password from organizer WHERE orgid='${organizerID}';`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    if(result.rows.length===0){
        res.status(201).send({message:"No such user found."});
    }
    else if(result.rows[0]['password']!==password){
        res.status(202).send({message:"Wrong password."});
    }
    else{
        res.status(200).json({ message: "Succesfull login" });
    }
})

router.post('/admin_login',async (req, res) => {
    const { adminID, password } = req.body;
    const client = await pool.connect();
    let result;
    try {
        result = await client.query(`SELECT password from admin WHERE aid='${adminID}';`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    if(result.rows.length===0){
        res.status(201).send({message:"No such user found."});
    }
    else if(result.rows[0]['password']!==password){
        res.status(202).send({message:"Wrong password."});
    }
    else{
        res.status(200).json({ message: "Succesfull login" });
    }
})

router.post('/other_login', async (req, res) => {
    const { email, password } = req.body;
    const client = await pool.connect();
    let result;
    try {
        result = await client.query(`SELECT password from other WHERE email='${email}';`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    } finally {
        client.release();
    }
    if(result.rows.length===0){
        res.status(201).send({message:"No such user found."});
    }
    else if(result.rows[0]['password']!==password){
        res.status(202).send({message:"Wrong password."});
    }
    else{
        res.status(200).json({ message: "Succesfull login" });
    }
})


module.exports = router;