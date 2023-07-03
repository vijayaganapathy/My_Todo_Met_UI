export const add_todo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: Date.now(),
            Name: data.title,
            Description: data.description,
        },
    }
}