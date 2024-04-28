const genelCocukHastaliklari = document.querySelector("#genelCocukHastaliklari")
const makaleler = document.querySelector("#makaleler")

genelCocukHastaliklari.addEventListener("click", activited)
makaleler.addEventListener("click", activited)

function activited(e) {
    if (e.target.id == "makaleler") {
        makaleler.classList = `bg-primary text-white px-6 py-6 rounded-xl shadow-lg flex justify-between items-center`
        genelCocukHastaliklari.classList = `bg-gray-50 px-6 py-6 rounded-xl shadow-lg flex justify-between items-center`;
    } else {
        genelCocukHastaliklari.classList = `bg-primary text-white px-6 py-6 rounded-xl shadow-lg flex justify-between items-center`
        makaleler.classList = `bg-gray-50 px-6 py-6 rounded-xl shadow-lg flex justify-between items-center`;

    }
}