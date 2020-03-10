const fs = require("fs");
const path = require("path");
// file path you wanna readding it.
const YourPath = path.join(__dirname, ".htaccess");
fs.readFile(YourPath, 'utf8', function (err, data) {
    if (err)  throw err
    console.log(data);
    // Here we will replace /xyz with myString we can use regular expression in this field
    let newValue = data.replace('/xyz', 'myString');

    fs.writeFile(YourPath, newValue, 'utf-8', function (err) {
      if (err) throw err;
      // Success message
      console.log('filelistAsync complete');
    });
});