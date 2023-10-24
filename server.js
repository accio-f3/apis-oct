const express = require("express");
const server = express();

const PORT = 8888;

function onStartFn() {
  console.log(`server have been started on http://localhost:${PORT}`);
}

function calculateSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function handleEmptyRouteFn(req, res) {
  res.send("hello world, this is my first API");
}

function handleSum(req, res) {
    console.log(req.query);
    // send is a method of res(response) used to send
    // info from server to browser.
    res.send(`sum of first ${req.query.number} numbers is ${calculateSum(req.query.number)}`);
}

server.get("/", handleEmptyRouteFn); // empty route (URL only)

server.get("/sum", handleSum);

server.listen(PORT, onStartFn);

// GET -> ✅
    // somebasic info if you want to send from
    // browser to server
    // query params
    // https://www.google.com/search?q=icc
