const progres = document.querySelector(".progress")
const boxValue = document.querySelector(".progress-info__value")

progres.addEventListener(
	"change",
	function () {
		boxValue.textContent = `${progres.value}%`
	},
	false
)
