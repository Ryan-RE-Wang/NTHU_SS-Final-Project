require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaInfo=`
    DROP TABLE IF EXISTS info;

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
    DROP TABLE IF EXISTS post;

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
        userId          text,
        alreadypost     boolean
    ) 
`;
const schemaClub=`
    DROP TABLE IF EXISTS club;

    CREATE TABLE Club(
        id              serial PRIMARY KEY NOT NULL,
        clubname        text Not NULL,
        facebook        text,
        instagram       text,
        clubpic         text,
        clubpassword    text Not NULL
    )
`;
db.none(schemaInfo).then(() => {
    console.log('info table created');
    return db.none(schemaPost).then(()=>{
        console.log('post table created')
        return
    })

}).then(() =>{
    db.none(schemaClub).then(()=>{
        console.log('club table created')
        pgp.end();
    })
}).catch(err => {
    console.log(process.env.DB_URL);
    console.log('Error creating schema', err);
});
