const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});