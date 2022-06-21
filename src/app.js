const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiRouter = require('./routes/apiRoutes/apiUsers.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(apiRouter);

app.use((req, res, next) => {
    res.json({
        status: 404,
        mssg: "Error, you tipped the wrong API."
    })
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));