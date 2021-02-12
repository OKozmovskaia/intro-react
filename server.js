const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

let Todo = require('./models/Todo');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Olga_K:Za8rCEZo0jAHNjfn@todo.l5zm9.mongodb.net/Todo?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
  });

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB connected ...");
})


const todoRoutes = express.Router();

todoRoutes.route("/").get((req,res) => {
  Todo.find((err, todoList) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todoList);
    }
  })
});

todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo.save((err, todo) => {
    if(err) {
      console.log(err);
      res.status(400).send("adding todo failed");
    } else {
      res.status(200).json({todo: "todo added"});
    }
  })
});

todoRoutes.route("delete/:id").post((req, res) => {
  
  Todo.deleteOne({_id: req.params.id}, err => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({todo: "todo deleted"})
    }
  })
})

app.use('/todos', todoRoutes);
app.get('*', (req, res) => {
	response.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});



app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));