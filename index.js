var n = document.querySelectorAll(".drum").length;

for (i = 0; i < n; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var s = this.innerHTML;
    makeSound(s);
    animation(s);


  });

}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);

  });


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;


    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;


    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(this.innerHTML);



  }

}


function animation (pressedKey) {
  var button = document.querySelector("." + pressedKey);

  button.classList.add("pressed");

  setTimeout(function() {
    button.classList.remove("pressed");
  }, 150);
}
