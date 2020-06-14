// navbar
export function openUserInfo(){
    return{
        type:'@NAVBAR/OPEN-USERINFO'
    }
}
export function changeToggle(){
    return{
        type:'@NAVBAR/CHANGE-TOGGLE'
    }
}
export function clickList(whichCatagory=''){
    
    if(whichCatagory == 'nthu'){
        return {
            type:'@NAVBAR/CLICK-NTHU'
        }
    }else if(whichCatagory == 'nctu'){
        return {
            type:'@NAVBAR/CLICK-NCTU'
        }
    }else if(whichCatagory == 'category'){
        return {
            type:'@NAVBAR/CLICK-CATAGORY'
        }
    }else{
        return {
            type:'@NAVBAR/CLICK-OTHER'
        }
    }
}
export function clickTag(tag){
    return{
        type:'@@NAVBAR/CLICK-TAG',
        tag:tag
    }

}
export function openSearchBar(){
    return{
        type:'@NAVBAR/OPEN-SEARCHBAR'
    }
}