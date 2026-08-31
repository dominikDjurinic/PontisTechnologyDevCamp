import { fetchProducts } from "./productsFetch.js";

let products = [
  {
    id: 1,
    name: "Zdenka sir",
    quantity: 30,
    price: 3,
    category: "mlijecni",
  },
  {
    id: 2,
    name: "Dukatos jogurt",
    quantity: 10,
    price: 2.5,
    category: "mlijecni",
  },
  {
    id: 3,
    name: "Coca Cola 1l",
    quantity: 0,
    price: 4,
    category: "pica",
  },
  {
    id: 4,
    name: "Napolitanke",
    quantity: 20,
    price: 3,
    category: "grickalice",
  },
  {
    id: 5,
    name: "Domaćica",
    quantity: 30,
    price: 2.5,
    category: "grickalice",
  },
];

// Funkcija vraca proizvode na stanju
const filterAvailableProducts = (products) => {
  return products.filter((product) => product.quantity > 0);
};

// Funkcija vraca ukupan broj proizvoda na stanju
const totalQuantityOfProducts = (products) => {
  return products.reduce((total, product) => total + product.quantity, 0);
};

// Funkcija vraca novo polje proizvoda sa dodatim PDV na cijenu
const addPDVOnPriceOfProducts = (products, pdv) => {
  return products.map((product) => {
    return { ...product, pricePdv: product.price + product.price * pdv };
  });
};

// Funkcija dohvaca proizvode s udaljenog API
const apiFetch = async () => {
  const products_api = await fetchProducts();
  console.log("\n\nProizvodi s udaljenog API: ");
  console.log(products_api);
  return products_api;
};

// bonus: Funkcija koja grupira proizvode po kategorijama
const groupProductsByCategory = (products) => {
  return products.reduce((grouped, product) => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
    return grouped;
  }, {});
};

/** MAIN program **/
console.log("Proizvodi na stanju: ");
console.log(filterAvailableProducts(products));
console.log(
  "\nUkupan broj proizvoda na stanju: " + totalQuantityOfProducts(products),
);
console.log("\n\nProizvodi sa PDV-om:");
console.log(addPDVOnPriceOfProducts(products, 0.25));

const productsFromAPI = apiFetch();

console.log("\n\nProizvodi grupirani po kategorijama:");
console.log(groupProductsByCategory(products));

const allProducts = [...products, ...(await productsFromAPI)];
console.log("\n\nSvi proizvodi grupirani po kategorijama: ");
console.log(groupProductsByCategory(allProducts));
