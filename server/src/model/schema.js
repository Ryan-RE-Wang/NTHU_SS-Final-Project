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

    CREATE TABLE post(
        id              serial PRIMARY KEY NOT NULL,
        title           text NOT NULL,
        content         text NOT NULL,
        startdate       DATE NOT NULL DEFAULT CURRENT_DATE,
        enddate         DATE NOT NULL DEFAULT CURRENT_DATE,
        starttime       TIME NOT NULL,
        endtime         TIME NOT NULL,
        ticket          integer NOT NULL,
        location        text NOT NULL,
        fileurl         text NOT NULL,
        tags            text[] NOT NULL,
        touch           integer NOT NULL,
        userid          text,
        mode            boolean
        club            text
    ) 
`;
const schemaClub=`
    DROP TABLE IF EXISTS club;

    CREATE TABLE club(
        id              serial PRIMARY KEY NOT NULL,
        userid          serial PRIMARY KEY NOT NULL,
        school          text NOT NULL,
        clubname        text NOT NULL,
        facebook        text,
        instagram       text,
        clubpic         text,
        clubpassword    text NOT NULL,
        savemode        integer
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
