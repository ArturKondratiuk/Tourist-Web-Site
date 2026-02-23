console.log("Payment page loaded.");

const urlParams = new URLSearchParams(window.location.search);
let basePrice = parseFloat(urlParams.get('price')) || 0;

const priceDisplay = document.getElementById('price-display');
const travelerType = document.getElementById('traveler-type');
const form = document.getElementById('payment-form');
const regionWarning = document.getElementById('region-warning');

function updatePrice() {
  let finalPrice = basePrice;
  if (travelerType.value === 'child') {
    finalPrice *= 0.75;
  }
  priceDisplay.textContent = `$${finalPrice.toFixed(2)}`;
}

travelerType.addEventListener('change', updatePrice);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  regionWarning.style.display = 'block';
});

updatePrice();