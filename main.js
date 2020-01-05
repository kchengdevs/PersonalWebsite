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
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
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
    let typeSpeed = 300;

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