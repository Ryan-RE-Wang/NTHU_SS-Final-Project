import {getpostdetail} from 'api/posts.js'


// get page id
export function getPage(page){
    return {
        type:'@POST/GETPAGE',
        ...page
    }
}


function startFetch(){
    return{
        type:'@POST/START-FETCHING'
    }
}
function getPostSucess(post){
    return{
        type:'@POST/END-FETCHING',
        ...post
    }
}
export function getArticleFromDB(pid){

    return(dispatch,getState) =>{

        dispatch(startFetch());

        getpostdetail(pid).then((post)=>{
            dispatch(getPostSucess(post))
        }).catch((err)=>{
            console.log("got err when fetching post ")
        })
    }

}

