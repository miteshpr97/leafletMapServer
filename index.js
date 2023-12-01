const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const locationRoutes = require('./routes/locationRoutes');

dotenv.config();
// Enable CORS

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Routes
app.use('/api', locationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
