const express = require("express");
require("./Database/db");
let MyModel = require("./Model/usermodel");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/users", async(req, res) => {
    // res.send("Fetching User");
    try {
        let result = await MyModel.find();
        res.send(result);
    } catch (error) {

    }
});

app.post("/api/users", async(req, res) => {
    //  console.log(req.body);
    // res.send("Creating User");
    try {
        let instance = new MyModel(req.body)
        let result = await instance.save();
        res.send("User created Successfully");
    } catch (error) {
        res.send(error);

    }
});

app.put("/api/users/:userid", async(req, res) => {
    try {
        let result = await MyModel.findByIdAndUpdate(req.params.userid, req.body);
        res.send("Updating User");
    } catch (error) {
        res.send(error);
    }

});

app.delete("/api/users/:userid", async(req, res) => {
    try {
        let result = await MyModel.findByIdAndDelete(req.params.userid);
        res.send("Deleting User");
    } catch (error) {
        res.send(error);

    }

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});