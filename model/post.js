module.exports = {

    toDoTasks: [

        {
            id: 0,
            title: 'ToDoTask',
            description: 'Task Description',
        }
    
    ],
    generateID(){
        return Math.random().toString(36).substring(2, 9);
    },
    getAll(){
        return this.toDoTasks;
    },
    newPost(title, description){
        this.toDoTasks.push({id: this.generateID(), title, description});
    },
    deletePost(){
        
    }


}