module.exports = {

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
        let postIndex = this.toDoTasks.indexOf((post) => {
            post.id == postID.id;
        })
        if(postIndex > -1){
            this.toDoTasks.splice(postIndex, 1);
        }
    }
}