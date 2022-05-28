document.addEventListener("DOMContentLoaded", ()=> {


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", () => {
  modal.style.display = "block";

})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/////////// this part handles POST a confirms if succesfull (button will be red)


const btnRegistration = document.querySelector(".register")

const sendRegistration = async () => {
    
    const url = `https://test-api.codingbootcamp.cz/api/5c0eb69c/events/${document.getElementById("1").id}/registrations`
    const inputData = {
        "name": document.getElementById("1").value,
        "surname": document.getElementById("2").value,
        "email": document.getElementById("3").value,
        "phone": document.getElementById("4").value
    }

    const response = await fetch(url, {
        "method": "Post",
        "body": JSON.stringify(inputData),
        "headers":  {
            "Content-Type" :"application/json"
        }

    })
   
    const myResponse = await response.json()
      if(myResponse.status === "success") {
        btn.style.backgroundColor = "red"
    } else{ console.log('failed');}
    
}
btnRegistration.addEventListener("click", sendRegistration);
})









