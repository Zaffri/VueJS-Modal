/**
 * @desc NodeJS file for Modal demo.
 * @version 1.0.0
 * @author Steven Morrison <https://github.com/Zaffri>
 */

const port      = process.env.PORT || 8080;
const express   = require("express");
const app       = express();

app.use(express.static('demos')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'demos/', 'index.html'));
});

app.listen(port, function(){
    console.log("Server running on port", port);
});