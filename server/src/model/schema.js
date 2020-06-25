require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaInfo=`
    CREATE TABLE info(
        id              serial PRIMARY KEY NOT NULL,
        username            text,
        password        text NOT NULL,
        picture         string,
        clubs           string,
    )
`
const schemaPost=`
    CREATE TABLE Post(
        id              serial PRIMARY KEY NOT NULL,
        title           text NOT NULL,
        content         text NOT NULL,
        startDate       DATE NOT NULL DEFAULT CURRENT_DATE,
        endDate         DATE NOT NULL DEFAULT CURRENT_DATE,
        startTime       TIME NOT NULL,
        endTime         TIME NOT NULL,
        ticket          integer,
        location        text,
        file            text,
        tags            text[]
    ) 
`

db.none(schemaInfo).then(() => {
    console.log('Schema created');
    db.none(dataSql).then(() => {
        console.log('Data populated');
        pgp.end();
    });
}).catch(err => {
    console.log(process.env.DB_URL);
    console.log('Error creating schema', err);
});
