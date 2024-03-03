const express = require('express');
const router = express.Router();

router.post('/student_login', (req, res) => {
    const { rollNo, password } = req.body;
    console.log(rollNo, password);
    res.status(200).json({ message: "Student login check on the way" });
})

router.post('/organizer_login', (req, res) => {
    const { organizerID, password } = req.body;
    console.log(organizerID, password);
    res.status(200).json({ message: "Organizer login check on the way" });
})

router.post('/admin_login', (req, res) => {
    const { adminID, password } = req.body;
    console.log(adminID, password);
    res.status(200).json({ message: "Admin login check on the way" });
})

router.post('/other_login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(200).json({ message: "Other login check on the way" });
})


module.exports = router;