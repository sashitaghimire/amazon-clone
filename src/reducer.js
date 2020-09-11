import { AccessTimeOutlined } from "@material-ui/icons";

export const initialState={
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
             return{
                 ...state,
                 basket: [...state.basket, action.item]
             };
             break;
        
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=>basketItem.id ===AccessTimeOutlined.id);

            if(index>= 0 ){
                //item exits in basket remove it
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Can't remove product (id: ${action.id}) as its not in basket.`)
            }

            return{...state,basket:newBasket}
        break;
        

        default:
            return state;
    }
}

export default reducer;