var express = require("express");
var app = express();
var cors = require("cors");
let projectCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//mongoDb connection
const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://user1:pass1@cluster0.2kjjmyt.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, { useNewUrlParser: true });

const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MongoDB Connected");
    } else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  });
};

//insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

//post api...
app.post("/api/projects", (req, res) => {
  console.log("New Project added", req.body);
  var newProject = req.body;
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "Project Successfully added",
        data: result,
      });
    }
  });
});
// const cardList = [
//   {
//       title: "kangaroo 2",
//       image: "images/kangaroo2.jpeg",
//       link: "About kangaroo 2",
//       desciption: "Demo desciption about kangaroo 2"
//   },
//   {
//       title: "kangaroo 3",
//       image: "images/kangaroo3.jpeg",
//       link: "About kangaroo 3",
//       desciption: "Demo desciption about kangaroo 3"
//   }
// ]

//get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

app.get("/api/projects", (req, res) => {
  getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: http://localhost:" + port);
  createCollection("kangaroos");
});

