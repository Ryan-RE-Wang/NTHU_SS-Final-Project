require('../config.js');
const express = require('express');
const infosRouter = require('./routers/infos.js');
const postsRouter = require('./routers/posts.js');
const clubsRouter = require('./routers/clubs.js');

// const requestLogger = require('./middleware/request-logger.js');
const errorHandler = require('./middleware/error-handler.js');
const accessController = require('./middleware/access-Controller.js');

const app = express();

app.use(accessController); // debug only
app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));
app.use('/api/infos', infosRouter);
app.use('/api/posts', postsRouter);
app.use('/api/clubs', clubsRouter);



app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);


const port = 4000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});
