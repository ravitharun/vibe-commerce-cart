
const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 150 },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
