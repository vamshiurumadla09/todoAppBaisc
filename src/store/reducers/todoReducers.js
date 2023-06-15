const initialState = {
    todos:['hello lets start']
}

function todoReducer (state = initialState, action){
    if(action.type === "ADDTODO"){
        return ({...state, todos:[...state.todos, action.payload]})
    }

    if(action.type === "DELETETODO"){
        var temp = [...state.todos];
        temp.splice(action.payload, 1);
        return ({...state, todos:[...temp]})
    }
    if(action.type === "DONETODO"){
        alert('Task completed');
    }
return ({...state})
}

export default todoReducer