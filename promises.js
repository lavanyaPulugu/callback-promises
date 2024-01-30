let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(1000, () => console.log("production started"));
  })

  .then(() => {
    return order(1000, () => console.log("cut the fruits"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
    );
  })
  .then(() => {
    return order(2000, () => console.log(`${stocks.holder[0]} selected`));
  })
  .then(() => {
    return order(2000, () => console.log(`add ${stocks.toppings[0]}`));
  })
  .then(() => {
    return order(2000, () => console.log("Serve ice cream"));
  })
  .catch(() => {
    console.log("customer left");
  });
