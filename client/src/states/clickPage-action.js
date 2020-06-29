// get page id
export function getPage(page){
    return {
        type:'@POST/GETPAGE',
        ...page
    }
}
