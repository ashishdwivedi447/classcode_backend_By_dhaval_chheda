//  for every node JS application we have to do---> npm init -y, and then installation of express by running command---> npm i express, and nodemon insatelled globally for this command is---> npm install -g nodemon.

const express = require("express");   // express is function which runs after invoking it

// Express is a Fast, unopinionated, minimalist web framework for Node.js. here unopinionated means it don't provide the boiler code . we can create folder structure as our own wish 



// console.log(express);

const app = express();



// REST APIs => Representational State Transfer
/*
    get => getting data from server
    post => add some data to server
    put / patch => update some data on the server
    delete => remove some data from server
*/

// express is always looking for method+route

// get is a function which takes two parameter first is route and second is call back function whihc takes two parameter
// request and responce . and here responce is an object on which send is a function.

app.get("/users", function (req, res) {
  res.send({ name: "Dhaval" });
});

app.get("/students", function (req, res) {
  // console.log(req.method) to check the methods
  res.send({ student: "Abc" });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

// it is advised use port between 2000 to 10000


// server ---> A server is a computer program or device which is put on centeral location and their task to send the responce based the request send by the clients(computer). A server can give responce to muiltiple client and in same way clients can use multple server for responce.
// a port is logical adddress which indentifies a specific service on computer.

// lets understand By this example ----> when postman come with lettter aks the name of arif then here arif is a port and address of that home is localhost of which every member is having a same address.

// to check responce in the postman do like this --->  http://localhost:4000/route(users/studdent)

// https://opportunities.masaischool.com/placements till .com is ia domain after that is a route.