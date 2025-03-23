import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send(" server is ok");
// });

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1 a joke",
      content: "1 joke content",
    },
    {
      id: 2,
      title: "2 a joke",
      content: "2 joke content",
    },
    {
      id: 3,
      title: "3 a joke",
      content: "3 joke content",
    },
    {
      id: 4,
      title: "4 a joke",
      content: "4 joke content",
    },
    {
      id: 5,
      title: "5 a joke",
      content: "5 joke content",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is ready ${port}`);
});
