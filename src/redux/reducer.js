

const initialState = {
  cartGoods: []
}


function reducer(state=initialState, action){
  switch(action.type){
    case "ADD_TO_CARD":
      return 'djj'
    case "DELETE_CARD":
      return ;
  }
}

export default reducer;