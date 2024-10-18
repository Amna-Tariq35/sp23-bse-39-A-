function showSection(sectionName){
  
    let sections = document.querySelectorAll(".section");
    sections.forEach((val,ind,arr) => {
        arr[ind].style.display = "none";
    })
    if(sectionName){
    let section = document.getElementById(sectionName);
    section.style.display = "block";
    }
    let post = document.getElementById("PostData");
    post.classList.add("d-none");
   
    

}

let urll = "https://reqres.in/api/users";
let createForm = document.querySelector("#createPostForm");
createForm.addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("createTitle").value;
    let email = document.getElementById("createBody").value;
    let crRes = document.getElementById("createResponse");
    let id = 1;
    $.ajax({
        url: urll,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ name: name, email: email, id: id }),
        success: function (response) {
            crRes.innerText = `User with ID: ${response.id} and Name: "${response.name}" has been created successfully!`;
            createForm.reset();
    
        },
        error: function (error) {
            crRes.innerText = "Error creating user:"+ error;
        },
})
}
)

    

function fetchPosts() {
    showSection();
    console.log("Function called");
    let post = document.getElementById("PostData");
    post.classList.remove("d-none");
    post.innerHTML = ""; 

    $.ajax({
        url: urll, 
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
    
            if (response && response.data && Array.isArray(response.data)) {
                response.data.forEach((item) => {
                    let formattedObject = `
                    {
                        "userId": ${item.id},  // Changed from userId to id based on ReqRes response
                        "name": "${item.first_name} ${item.last_name}", // Full name
                        "email": "${item.email || 'N/A'}" // Handle case if job is not defined
                    }
                    `;
                 
                    let postContent = `
                        <div class="m-2 p-2">
                            <pre>${formattedObject}</pre> <!-- Use <pre> for preserving formatting -->
                        </div>
                    `;
                    post.innerHTML += postContent;
                });
            } else {
                alert('Unexpected response format');
            }
        },
        error: function(error) {
            console.error("Error fetching user:", error);
        },
    });
}
let uForm = document.getElementById("updatePostForm");
uForm.addEventListener("submit",function(e){
    e.preventDefault();
     let postId = document.getElementById("postId").value;
     let name = document.getElementById("updateTitle").value;
     let email = document.getElementById("updateBody").value;
     let upRes = document.getElementById("updateResponse");
     let id= 1;
        $.ajax({
            url: `${urll}/${postId}`,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ name: name, email: email, id: id }),
            success: function (response) {
                upRes.innerText = `Put with ID: ${response.id} and Name: "${response.name}" `
                uForm.reset(); 
            },
            error: function (error) {
                upRes.innerText = "Error updating user:"+ error;
        
            },
    })


   
})

let dForm = document.getElementById("deletePostForm");
dForm.addEventListener("submit",function(e){
    e.preventDefault();
     let postId = document.getElementById("deletePostId").value;
     let delRes = document.getElementById("deleteResponse");
        $.ajax({
            url: `${urll}/${postId}`,
            method: "DELETE",
            contentType: "application/json",
            data: "",
            success: function (response) {
                delRes.innerText = `User with id:${postId} has been deleted `;
                dForm.reset();
            },
            error: function (error) {
                delRes.innerText = "Error in deleting the user:"+ error;
            },
    })


   
})




