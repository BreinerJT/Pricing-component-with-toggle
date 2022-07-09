const switchBtn = document.querySelector(".switch")
const pricingWrapper = document.querySelector(".pricing-wrapper")

switchBtn.addEventListener("click", () => {
    pricingWrapper.classList.toggle("annual")
})