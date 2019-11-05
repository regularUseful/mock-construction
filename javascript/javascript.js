let navi = document.getElementById("main-nav");
let about_section = document.getElementById("about-section");
let descriptive_containers = document.getElementsByClassName("descriptive-container");
let title_word = document.getElementsByClassName("js_animate-heading");
let title_p = document.getElementById("title-p");
let title_button = document.getElementById("title-button");
let paralax = document.getElementById("paralax");
let testimonials = document.getElementById("testimonials");
let testi_row = document.getElementById("testi-row");
let services = document.getElementById("services");
let count = 0;


function doTimeout(i){
		setTimeout(()=> {descriptive_containers[i].classList.add("js_slide-in")}, i*200);
}

function headingAnimate(i){
	setTimeout(()=> {title_word[i].classList.add("js_opacity");
					count++;
					if(count == 6){
						title_p.classList.add("js_opacity");
						title_button.classList.add("js_opacity");
						navi.classList.add("js_opacity");
					}
					}, i*200);
}

window.onload = (i) => {
	for(let i = 0; i < title_word.length; i++){
			headingAnimate(i);
		}
}



window.addEventListener("scroll", function(){
	window.scrollY != 0 ? navi.classList.add("js_scrolled"): navi.classList.remove("js_scrolled");
	if(window.scrollY > about_section.offsetHeight){
		for(let i = 0; i < descriptive_containers.length; i++){
			doTimeout(i);
		}}
	if(window.scrollY > paralax.offsetHeight + 500){
		paralax.classList.add("js_width");
	}
})




