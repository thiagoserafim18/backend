const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello Word')
}
)

app.listen(3014, () => {
    console.log('Server is running on port 3014')
});

