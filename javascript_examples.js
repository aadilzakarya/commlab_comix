AOS.init();
//for the first panel
let iclicked=0;
let p1CLICK=document.getElementById("first");
let audio1=document.getElementById("audio");
p1CLICK.addEventListener('mouseenter' , event =>{
	{
    audio1.play();
    p1CLICK.src='Party Message.jpg';
	}
})

p1CLICK.addEventListener('mouseleave' , event =>{
	if(iclicked==0){
		p1CLICK.src='Phone Notification.jpg';
	}
	})

function myFunction() {
  var x = document.getElementById("reddress");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function playCat() {
  var audio = document.getElementById("catAudio");
  audio.play();
}

function playSong() {
  var audio = document.getElementById("speakerAudio");
  audio.play();
}
