const initCatagoryPageState = {
    category: 'ALL',
    order: 'A to Z'
}

export function category(state = initCatagoryPageState, action) {
    switch(action.type){
        case '@CAT_PAGE/CHAGE_CAT':
            return{
                ...state,
                category :action.category
            }
        case '@CAT_PAGE/CHAGE_ORDER':
            return{
                ...state,
                order :action.order
            }
        default:
            return{
                ...state
            }
    }
}