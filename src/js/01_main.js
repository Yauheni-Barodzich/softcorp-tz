let valueText = document.querySelector('.orderform__form__slider__value');
let sliderInput = document.querySelector('.orderform__form__slider__range');

function updateSliderValue () {
    if (valueText.innerHTML) {
        valueText.innerHTML = sliderInput.value + '%';
    }
}