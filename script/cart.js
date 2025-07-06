//  Global



// Quantity Changer

const incr_btn = document.querySelector(".incr");
const decr_btn = document.querySelector(".decr");
const quantity_box = document.querySelector(".item-quantity-box");



incr_btn.addEventListener('click', () => {
  var value = Number(quantity_box.value);
  if(value >= 99){
    value = 99;
    quantity_box.value = value;
    return;
  }
  value += 1;
  quantity_box.value = value;
})

decr_btn.addEventListener('click', () => {
  var value = Number(quantity_box.value);
  if(value <= 1) {
    return;
  }
  value -= 1;
  quantity_box.value = value;
})

// Total Amount Calculation

function total_amount(){
  const price = document.querySelector(".item-price");
  const total = document.querySelector(".");
}

// Remove item

const remove_btn = document.querySelector(".product-remove");

remove_btn.addEventListener('click', () => {

})