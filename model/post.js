module.exports = {

    toDoTasks: [

        {
            id: this.generateID,
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
    deletePost(id){
        let postIndex = this.toDoTasks.indexOf((post) => {
            post.id == id;
        })
        this.toDoTasks.splice(postIndex, 1);
    }
}