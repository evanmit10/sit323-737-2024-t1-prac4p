const express= require("express");
const res = require("express/lib/response");
const app= express();
app.use(express.json());

const add = (n1, n2) => { return n1 + n2; }
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = add(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});

const subtract = (n1, n2) => { return n1 - n2; }
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});

const multiply = (n1, n2) => { return n1 * n2; }
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});


const divide = (n1, n2) => { return n1 / n2; }
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});

const port = 3000;
app.listen(port, () => {
    console.log("server is listening on port " + port);
});