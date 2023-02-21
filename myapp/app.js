const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Наше промежуточное ПО');
    next();
  });


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });
// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact page</h1>');
//   });

