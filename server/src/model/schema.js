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

    CREATE TABLE post (
        id              serial PRIMARY KEY NOT NULL,
        title           text,
        content         text,
        startdate       DATE DEFAULT CURRENT_DATE,
        enddate         DATE DEFAULT CURRENT_DATE,
        starttime       TIME,
        endtime         TIME,
        ticket          text,
        location        text,
        fileurl         text,
        tags            text[],
        touch           integer,
        userid          text,
        mode            boolean
        club            text
    ) 
`;
const schemaClub=`
    DROP TABLE IF EXISTS club;

    CREATE TABLE club(
        id              text,
        userid          text,
        school          text NOT NULL,
        clubname        text NOT NULL,
        facebook        text,
        instagram       text,
        clubpic         text,
        clubpassword    text NOT NULL
    )
`;
const dataSql = `
    -- Populate dummy post
    INSERT INTO post (
        id,
        title,
        content,
        startdatetime,
        enddatetime,
        ticket,
        location,
        fileurl,
        tags,
        touch,
        userid,
        mode,
        club)
    SELECT
        generate_series(1, 1000),
        'word' || i || ' word' || (i+1) || ' word' || (i+2),
        'word' || i || ' word' || (i+1) || ' word' || (i+2), 
        '2017-05-24T10:30',
        '2017-05-24T10:30',
        '0',
        'Mong Ming Wei',
        'https://team11final.s3-us-west-1.amazonaws.com/1681ca51-9b78-4dcd-a319-1512215c2adf.jpeg?fbclid=IwAR1oVg0DWbh7Vw8nxD0-ZXNZkZs7NENoKO9Zk_VdQo81EhZPyx_wn3Otujc',
        '['a', 'b', 'c']',
        0,
        'Hello Kitty', 
        true,
        'A'

    FROM generate_series(1, 1000) AS s(i);
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
