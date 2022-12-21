const burger = document.querySelector(".burger")
const headerlink = document.querySelectorAll(".navigation-link")

burger.addEventListener("click", () => {
	burger.classList.toggle("burger-active")
})

headerlink.forEach((item) => {
	item.addEventListener("click", () => burger.classList.remove("burger-active"))
})
