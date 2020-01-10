// Highlight whichever navbar link was selected
const allItems = document.querySelectorAll(".navmenu ul li a");

// Update navbar when scrolling
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  allItems.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

$(document).ready(function(){
    $(this).scrollTop(0);
});

// Smooth scrolling
$(document).ready(function() {
	$(".navmenu ul li a").click(function(e) {
		var linkHref = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(linkHref).offset().top
		}, 1000);

		e.preventDefault();
	});
});

 $(window).scroll(function() {

  	var winTop = $(window).scrollTop();

    $(".slideright").each(function(){
      var pos = $(this).offset().top;
      if (winTop + 600 > pos) {
        $(this).addClass("slideinright");
      }
      if(winTop === 0) {
        $(this).removeClass('slideinright')
      }
    });
  });

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#Cpop');
const closeBtn = document.querySelector('.closeBtn');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Open
function openModal() {
  modal.style.display = 'block';
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Get DOM Elements
const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#Jpop');
const closeBtn1 = document.querySelector('.closeBtn1');

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);

// Open
function openModal1() {
  modal1.style.display = 'block';
  modal.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';       
}

// Close
function closeModal1() {
  modal1.style.display = 'none';
}

// Get DOM Elements
const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#Hpop');
const closeBtn2 = document.querySelector('.closeBtn2');

// Events
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);

// Open
function openModal2() {
  modal2.style.display = 'block';
  modal.style.display = 'none';
  modal1.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';        
}

// Close
function closeModal2() {
  modal2.style.display = 'none';
}

// Get DOM Elements
const modal3 = document.querySelector('#my-modal3');
const modalBtn3 = document.querySelector('#Spop');
const closeBtn3 = document.querySelector('.closeBtn3');

// Events
modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);

// Open
function openModal3() {
  modal3.style.display = 'block';
  modal.style.display = 'none'; 
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal4.style.display = 'none';       
}

// Close
function closeModal3() {
  modal3.style.display = 'none';
}

// Get DOM Elements
const modal4 = document.querySelector('#my-modal4');
const modalBtn4 = document.querySelector('#Ppop');
const closeBtn4 = document.querySelector('.closeBtn4');

// Events
modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);

// Open
function openModal4() {
  modal4.style.display = 'block';
  modal.style.display = 'none'; 
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';       
}

// Close
function closeModal4() {
  modal4.style.display = 'none';
}

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 250;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}