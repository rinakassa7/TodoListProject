export default function() {
    return {
        lists: [
            {
                id: 0,
                name : "Liste 0",
                todos : [
                {
                    id: 0,
                    name : 'tache 0',
                    completed : false
                },
                ]
            }
        ],
        newTodo: '',
        newList: '',
        filter: 'all',
    }
}