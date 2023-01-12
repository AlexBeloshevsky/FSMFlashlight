var express = require("express");
var app = express();
var cors = require('cors')

const PORT = process.env.PORT || 3001;
const initialState = 'off'

app.use(cors())

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
app.get("/getState", (req, res) => {
	res.json(initialState);
});