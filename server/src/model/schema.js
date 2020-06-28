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
    );
`;
const schemaPost=`
    DROP TABLE IF EXISTS post;

    CREATE TABLE post(
        id              text,
        title           text,
        content         text,
        startdatetime   text,
        enddatetime     text,
        ticket          text,
        location        text,
        fileurl         text,
        tags            text[],
        touch           integer,
        userid          text,
        mode            boolean,
        club            text
    ); 
`;
const schemaClub=`
    DROP TABLE IF EXISTS club;

    CREATE TABLE club(
        id              text,
        userid          text,
        school          text,
        clubname        text NOT NULL,
        facebook        text,
        instagram       text,
        clubpic         text,
        clubpassword    text NOT NULL
    );
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
