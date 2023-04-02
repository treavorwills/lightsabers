const hilts = document.querySelectorAll('#hilt')

for (let i=0; i < hilts.length; i++) {
    hilts[i].addEventListener('click', function(event) {
        if (this.classList.contains("on")) {
        this.classList.add("off");
        this.classList.remove("on");
        } 
        else {
            this.classList.add("on");
            this.classList.remove("off");
        }
    })
}
