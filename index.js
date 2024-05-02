const express = require("express");
const app=express();
app.use(express.json());


app.get("/data", (req,res) => {

    let number = "";
    for(let i=0; i<= 100; i++){
        number +=  i + "-";
    }
    //res.status(200).send({number: number})
    //res.send("<h1>hello</h1>")
    //res.sendFile( __dirname + "/views/numbers.html")
    res.render("numbers.ejs", 
    {
        id : "5",
        numb: number,
    });
})

app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})

app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})
app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})
app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})
app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})
app.get("/datanumber/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const total = Number(num1)+Number(num2);
    res.send(` ${num1} + ${num2} = ${total} `);

})


// app.get("/datanumber/:num1/:num2", (req, res) => {
//     const num1 = req.params.num1
//     const num2 = req.params.num2
//     const total = Number(num1)+Number(num2);
//     res.send(` ${num1} + ${num2} = ${total} `);

// })

app.get("/databody", (req, res) => {
    const data = req.body;
    res.json(data);
    // res.send(data);
})



app.listen(3001, () => {
    console.log({ message: "server started"});
})

