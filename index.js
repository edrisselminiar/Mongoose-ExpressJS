const express = require("express");
const mongoose = require("mongoose");

const app=express();
app.use(express.json());

const User = require("./models/Users.js");





mongoose.connect("mongodb+srv://rrdp300:INgIrEsCViDvnuhG@cluster0.5fmvsi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log({message: 'MongoDB Connected'});

        app.get("/", (req, res) => {
            console.log("hello");
        })


    })
    .catch(() => {
        console.log('Error Connecting to MongoDB');

    })



//mongodb+srv://rrdp300:<password>@cluster0.5fmvsi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
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




app.get("/databody", (req, res) => {
    const data = req.body;
    res.json(data);
    // res.send(data);
})

app.post("/users", async (req, res) => {
    const newUser = new User();

    const newname = req.body.name;
    const newemail = req.body.email;
    const newpassword = req.body.password;


    newUser.name= newname;
    newUser.email= newemail;
    newUser.password= newpassword;
    await newUser.save();
    res.json(newUser);
    console.log({ message : "its oaky"});

})

app.get("/users", async (req ,res) => {
    const user = await User.find();
    res.json(user);


})

app.get("/usersSerch/:id", async (req ,res) => {
    const id = req.params.id ;
    try{
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).json(user);

    } catch (err) {
        console.log({ message : "eror while reading user of id", id});
        return res.send({ message : "eror while reading user of id", id })

    }


    //An other way
    // const id = req.params.id
    // const user = await User.findById(id)
    //     .then((user)=>{
    //         res.json(user); 
    //     })
    //     .catch((err) =>{
    //         res.send({ message : "thid id is not found", err })
    //     })
        

})

app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error({ message: "Error while deleting user of id " + id });
        res.status(500).send({ message: "Error while deleting user of id " + id });
    }
});

app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;

            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).send({ message : "users not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});








app.listen(3001, () => {
    console.log({ message: "server started"});
})

