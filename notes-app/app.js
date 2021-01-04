const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Johann.");

fs.appendFileSync(
  "notes.txt",
  " I'm appending new content with fs.appendFileSync!"
);
