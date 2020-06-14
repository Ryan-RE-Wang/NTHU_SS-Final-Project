const fs = require('fs');

function create(account,password) {
    return new Promise((resolve, reject) => {
        const newPost = {
            id: uuid(),
            mood: mood.charAt(0).toUpperCase() + mood.slice(1),
            text: text,
            ts: moment().unix(),
        };

        list().then(posts => {
            posts = [
                newPost,
                ...posts
            ];
            fs.writeFile('data-posts.json', JSON.stringify(posts), err => {
                if (err) reject(err);

                resolve(newPost);
            });
        });
    });
}
function login(account, password){
    return new Promise((reslove,reject)=>{
        
    });
}
function create(account, password){
    return new Promise((reslove,reject)=>{
        
    });
}