const express = require("express");
const app = express();
const swaggerJSON = require("./swagger/swagger.json");
const swaggerUI = require("swagger-ui-express");

app.use(express.json());

const todo = require("./routes/todo");

app.use(todo);
app.use("/swaggerUI", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
