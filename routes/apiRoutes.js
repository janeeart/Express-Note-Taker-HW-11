const notesData = require('../db/db.json');
const fs = require("fs");
// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.get('/api/notes', (req, res) => res.json(notesData));


  app.post('/api/notes', (req, res) => {
    var data = req.body
    data ["id"] = Math.floor(Math.random()*1000000)
    if (notesData.length < 8) {
      notesData.push(data);
      fs.writeFile("./db/db.json", JSON.stringify(notesData), err => {
        if (err) throw err;
        res.json(true);
      })
    } else {
      res.json(false);
    }
  });
}
