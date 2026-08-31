// Funkcija dohvaca s udaljenog API proizvode i vraca prvih 5
export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response?.json();
    if (products.products.length > 5) {
      return products.products.slice(0, 5).map((product) => {
        return {
          id: product.id,
          name: product.title,
          quantity: product.stock,
          price: product.price,
          category: product.category,
        };
      });
    }
    return products.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
