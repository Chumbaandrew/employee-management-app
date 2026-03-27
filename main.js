function handlealert(){
    alert("Edit this contact?");
}

function handledelete(){
    let confirmdelete = confirm("Do you want to delete this contact ?");

    if(confirmdelete){
        alert("Deleted successfully !")
    }
    else{
        alert("Wagwan noted !")
    }
}
function soon(){
    alert("This button doesn't function at the moment, coming soon!");
}
function logout(){
    let confirmlogout = confirm("Do you want to log out?");

    if(confirmlogout){
        window.location.href='index.html';
    }
    else{
        alert("Pheeeewks !")
    }
}