let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, abc) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
  }, 2000);
  abc();
};
let production = () => {
  setTimeout(() => {
    console.log("production started");

    setTimeout(() => {
      console.log("cut the fruits");

      setTimeout(() => {
        console.log(`add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

        setTimeout(() => {
          console.log(`${stocks.holder[0]} selected`);

          setTimeout(() => {
            console.log(`add ${stocks.toppings[0]}`);
            setTimeout(() => {
              console.log("Serve ice cream");
            }),
              2000;
          }, 3000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 1000);
};
order(3, production);
