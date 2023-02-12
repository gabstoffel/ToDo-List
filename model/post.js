let postTask ={

    toDoTasks: [],
    generateID(){
        return Math.random().toString(36).substring(2, 9);
    },
    getAll(){
        return this.toDoTasks;
    },
    newPost(title, description){
        this.toDoTasks.push({id: this.generateID(), title, description});
    },
    deletePost(postID){
        this.toDoTasks.forEach((element) => {
            if(element.id == postID){
                let index = this.toDoTasks.indexOf(element);
                this.toDoTasks.splice(index, 1);
            }
            return this.toDoTasks;
        })
    }
}
export default postTask;