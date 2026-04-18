require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

// env file load based on environment


const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(3000, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
