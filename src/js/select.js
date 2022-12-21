import * as Choices from "choices.js"
const defaultSelect = () => {
	const element = document.querySelector(".js-choices")
	new Choices(element, {
		searchEnabled: false,
		itemSelectText: "",
	})
}

defaultSelect()
