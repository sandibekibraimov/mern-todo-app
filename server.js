const express = require('express');
const cors = require('cors');
const connectDB = require('./connectDB');
const path = require('path');
const todoRoutes = require('./routes/todo.routes');

const app = express();
connectDB();

app.use(express.json({ extended: true }));
app.use(cors());

app.use('/api/todos', todoRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
