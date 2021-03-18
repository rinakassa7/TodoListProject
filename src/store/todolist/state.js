export default function() {
    return {
        lists: [
            {
                id: 0,
                name : "Achats",
                todos : [
                    {
                        id: 0,
                        name : 'acheter du pain',
                        completed : false
                    },
                    {
                        id: 1,
                        name : 'acheter du lait',
                        completed : true
                    },
                ]
            },
            {
                id: 1,
                name : "Rendez-vous",
                todos : [
                    {
                        id: 0,
                        name : 'RDV avec le prof le 15.03 à 13.30',
                        completed : false
                    },
                ]
            },
        ],
        newTodo: '',
        newList: '',
        filter: 'all',
    }
}