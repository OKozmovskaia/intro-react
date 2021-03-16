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
  useCreateIndex: true,
  useFindAndModify: true
  });

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB connected ...");
})

// define router
const router = express.Router();

router.get('/todos', (req,res) => {
  Todo.find({}, function(err, todos) {
    if (err) {
        console.log(err);
    } else {
        res.json(todos);
    }
  })
});

router.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);
  todo.save((err, todo) => {
    if(err) {
      console.log(err);
      res.status(400).send("adding todo failed");
    } else {
      res.status(200).json({todo: "todo added"});
    }
  })
});

router.put('/todos/:id', async (req, res) => {
  try {
    const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.status(200).json(newTodo);
  } catch (error) {
    console.log(error);
  }
  
})

router.delete('/todos/:id', (req, res) => {
  
  Todo.findByIdAndRemove(req.params.id, err => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({todo: "todo deleted"})
    }
  })
})

app.use('/', router);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));