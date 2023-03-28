'use strick';
const express = require('express');

const POST = 8080;
const HOST = "0.0.0.0";

const app = express();
const res = require("express/lib/response");

const add=(n1,n2) => {
    return n1+n2;
}

const subtract=(n1,n2) =>{
    return n1-n2;
} 

const multiple=(n1, n2) =>{
    return n1*n2;
}

const divide=(n1, n2) =>{
    return n1/n2;
}

app.get("/add", (req,res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
            
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result =add(n1,n2);
        res.status(200).json({statuscocde:200, data: result });

    } catch (error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
            
        }
        
    });
//const port = 3040;
var a = add(5, 8);
console.log(a);
    

app.get("/subtract", (req,res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
            
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result =subtract(n1,n2);
        res.status(200).json({statuscocde:200, data: result });

    } catch (error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
            
        }
        
    });

app.get("/multiple", (req,res) => {
        try{
            const n1 = parseFloat(req.query.n1);
            const n2 = parseFloat(req.query.n2);
            if (isNaN(n1)) {
                throw new Error("n1 incorrectly defined");
                
            }
            if (isNaN(n2)) {
                throw new Error("n2 incorrectly defined");
            }
    
            const result =multiple(n1,n2);
            res.status(200).json({statuscocde:200, data: result });
    
        } catch (error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString()})
                
            }
            
        });

app.get("/divide", (req,res) => {
        try{
            const n1 = parseFloat(req.query.n1);
            const n2 = parseFloat(req.query.n2);
            if (isNaN(n1)) {
                throw new Error("n1 incorrectly defined");
                
            }
            if (isNaN(n2)) {
                throw new Error("n2 incorrectly defined");
            }
    
            const result =divide(n1,n2);
            res.status(200).json({statuscocde:200, datas: result });
    
        } catch (error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString()})
                
            }
            
        });


var a = subtract(5, 8);
console.log(a);

app.listen(POST,HOST,() => {
    console.log(`Running on http://${HOST}:${POST}`);
});