const allItems = document.querySelectorAll(".navmenu ul li a");

allItems.forEach(item => {
	item.addEventListener("click", function(e) {
		for(var i = 0; i < allItems.length; i++) {
			allItems[i].classList.remove("active");
		}
		this.classList.add("active");
	});
});

const logo = document.querySelectorAll('#name path');

for(let i = 0; i < logo.length; i++) {
	console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}