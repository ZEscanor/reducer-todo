

export const initialState = {
    todo:[
    {
    item: 'Learn about reducers',
  completed: false,
  id: 3892987589


},
{
    item: 'Learn',
    completed: false,
    id: 3892987689
}]
}
export const reducer =(state,action) => {
 switch (action.type) {
     case "ADD_TODO":
         const newItem= {
             item: action.payload,
             completed:false,
             id: Date.now(),
         };
         return { ...state,
             todo: [...state.todo, newItem]
         };
     case "TODO_COMPLETED":
        console.log('doin completed',state.todo)
         return{
         
             ...state, todo:state.todo.map((item) => {
                 if(item.id === action.id){
                     return{...item, completed: !item.completed};
                 } else {
                     return item;
                 }
             }),
         };
         case "CLEAR_COMPLETED":
          return{
              ...state, todo: state.todo.filter((item) => !item.completed),
          };
         default:return state;
  

 }

};

