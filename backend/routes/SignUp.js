const express = require('express');
const router = express.Router();


router.post("/student_signup", (req, res) => {
    const { name, rollNo, password } = req.body;
    console.log(name, rollNo, password);
    res.status(200).json({ message: "Signup storing on the way" });
})

router.post("/organizer_signup", (req, res) => {
    const { name, organizerID, password } = req.body;
    console.log(name, organizerID, password);
    res.status(200).json({ message: "Organizer signup storing on the way" });
})
router.post("/admin_signup", (req, res) => {
    const { name, adminID, password } = req.body;
    console.log(name, adminID, password);
    res.status(200).json({ message: "admin signup storing on the way" });
})
router.post("/other_signup", (req, res) => {
    const { name, collegeName, email , password } = req.body;
    console.log(name, collegeName, email, password);
    res.status(200).json({ message: "other signup storing on the way" });
})



module.exports = router;