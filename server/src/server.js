require('../config.js');
const express = require('express');

const postRouter = require('./routers/posts.js');
const todoRouter = require('./routers/todos.js');
const infoRouter = require('./routers/infos.js');
// const requestLogger = require('./middleware/request-logger.js');
const errorHandler = require('./middleware/error-handler.js');
const accessController = require('./middleware/access-Controller.js');

const app = express();

// app.use(requestLogger); // debug only
app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));
// app.use('/api/posts', postRouter);
// app.use('/api/todos', todoRouter);
app.use('/api/infos', infoRouter);

app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});
