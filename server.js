const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
})

app.use('/todos', todoRoutes);



app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));