document.addEventListener('DOMContentLoaded', () => {

        updatePosts();
    
})
function updatePosts(){

    let promise = fetch('http://localhost:3030/api/all').then((res) =>{
        return res.json();
    })
    promise.then((json) => {
        let postElements = '';
        let posts = JSON.parse(json);//transforma o json em um objeto;
        posts.forEach((post) => {
            let id = post.id;
            let postElement = `
                  
                <div id=${post.id} class="card mb-2">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                        <button onclick="deletePost(${post.id})" "type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>
            
            `
            return postElements += postElement;
        })

        document.getElementById('posts').innerHTML = postElements;

    })
}
function newPost(){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let post = {title, description};
    let options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post),
    }
    fetch('http://localhost:3030/api/new', options).then((res) => {
        updatePosts();
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    })

}
function deletePost(post){
    let postID = new String(post.id);
    let url = 'http://localhost:3030/api/del/' + postID;
    fetch(url, ()=>{
        updatePosts();
    })
}