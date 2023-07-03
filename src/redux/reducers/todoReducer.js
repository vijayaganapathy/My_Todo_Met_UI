const initialState = {
    rows : [
        { id: 1, Name: 'TodoList 1', Description: 'This first todo', Status: true},
        { id: 2, Name: 'TodoList 2', Description: 'This second todo', Status: false},
        { id: 3, Name: 'TodoList 3', Description: 'This third todo', Status: false},
      ],
      isEdit: false,
      editTodo: [],
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, Name, Description } = action.payload;

            return {
                rows : [...state.rows, {id:id ,Name:Name, Description:Description, Status: false}],
                isEdit: false,
                editTodo : [],
            };
        case "DELETE_TODO":
            const removeId = action.payload.id;
            return {
                rows : state.rows.filter((task)=>task.id !== removeId)
            };
        case "MARK_COMPLETED":
            const statusID = action.payload.id;
            let newArray = state.rows.map((task) => {
                if(task.id === statusID) {
                    task.Status = task.Status === true ? false : true
                }
                return task;
            })
            return {
                rows : [...newArray]
            };
        case "EDIT_TODO":
            const editID = action.payload.id;
            return {
                rows : [...state.rows],
                isEdit: true,
                editTodo : state.rows.filter((task)=>task.id === editID),
            };
        case "UPDATE_TODO":
            // const { updId, updName, updDescription } = action.payload;
            let updateArray = state.rows.map((task) => {
                if(task.id === action.payload.id) {
                    task.Name = action.payload.Name;
                    task.Description = action.payload.Description;
                }
                return task;
            })
            return {
                rows : [...updateArray],
                isEdit: false,
                editTodo : [],
            };
        default:
            return state;

    }
}

export default todoReducer;