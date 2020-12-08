const express = require('express')
const app = express()
const port = 3000






// + ------------------------------------------------------------------------- +
// + ROUTES                                                                    +
// + ------------------------------------------------------------------------- +

app.get('/', (req, res) => {
  res.send('We are on home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


