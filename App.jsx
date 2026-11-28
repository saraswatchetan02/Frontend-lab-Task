
import ProductCard from './ProductCard';
import './App.css';
function App() {
  return (
    <div>
      <h1>Our Products</h1>

      <ProductCard
        image="https://placehold.co/200x150?text=Laptop"
        title="Laptop"
        description="A powerful laptop for students."
      />

      <ProductCard
        image="https://placehold.co/200x150?text=Mobile"
        title="Mobile"
        description="A smartphone with great features."
      />

      <ProductCard
        image="https://placehold.co/200x150?text=Headphones"
        title="Headphones"
        description="High quality wireless headphones."
      />

    </div>
  );
}

export default App;
