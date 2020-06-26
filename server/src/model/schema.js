require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaInfo=`
    CREATE TABLE info(
        id              serial PRIMARY KEY NOT NULL,
        username        text,
        password        text NOT NULL,
        email           text NOT NULL,
        picture         text,
        clubs           text
    )
`;
const schemaPost=`
    CREATE TABLE Post(
        id              serial PRIMARY KEY NOT NULL,
        title           text NOT NULL,
        content         text NOT NULL,
        startDate       DATE NOT NULL DEFAULT CURRENT_DATE,
        endDate         DATE NOT NULL DEFAULT CURRENT_DATE,
        startTime       TIME NOT NULL,
        endTime         TIME NOT NULL,
        ticket          integer NOT NULL,
        location        text NOT NULL,
        fileURL            text NOT NULL,
        tags            text[] NOT NULL,
        touch           integer NOT NULL,
        userId          text
    ) 
`;

db.none(schemaInfo).then(() => {
    console.log('info table created');

}).catch(err => {
    console.log(process.env.DB_URL);
    console.log('Error creating schema', err);
});
