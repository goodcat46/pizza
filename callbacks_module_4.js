
  let gender = confirm(`Ваша стать "Ч" ?`);
  let gendr = gender === true ? "шановний" : "шановна" ;
  let gendr2 = gender === true ? "Шановний" : "Шановна" ;

let pizzaForMatherFuckers = function () {
  if (gender === false) {
    
    makePizza(gender, function eatPizza(pizzaName) {
      return alert(`Жеріть піцу "${pizzaName}" і звалюйте! Херового вам дня.`);
    });
    
  }
  makePizza(gender, function eatPizza(pizzaName) {
    return alert(`Ваша "${pizzaName}" готова. Заберіть її у місці видачі і подорожуйте з миром! Найкращого вам дня.`);
  });
};
pizzaForMatherFuckers ();

function makePizza(gender, callback) {
  let askWantPizza = confirm(`Бажаєте піццу замовити ${gendr}?`);
  if ( askWantPizza === true) {
    let pizzaName = prompt(`${gendr2}, введіть назву піцци будь ласка`);
    if (gender === true) {
      return alert(`Піцца "${pizzaName}" для красавчиків готується, зачекайте лише мить будь ласка...`),
    callback(pizzaName);
    }
    return alert(`Піцца "${pizzaName}" для низькосортних курвів готується, зачейте пів життя будь ласка...`),
    callback(pizzaName);
  }
  return alert("Господи, ну воно і кончене ...")
}



