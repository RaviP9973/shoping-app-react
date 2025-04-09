import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import electronicImage from '../assets/electronic.avif';
import mensClothingImage from '../assets/mens clothing.jpg';
import womensClothingImage from '../assets/womens clothing.jpg';
import jewelleryImage from '../assets/jwellery.jpg';

const categoryImages = {
  "electronics": electronicImage,
  "men's clothing": mensClothingImage,
  "women's clothing": womensClothingImage,
  "jewelery": jewelleryImage
};

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get('https://fakestoreapi.com/products/categories');
        const categoriesData = categoriesResponse.data.map((category, index) => ({
          id: index + 1,
          name: category,
          image: categoryImages[category] || electronicImage // fallback to electronics image if category not found
        }));
        setCategories(categoriesData);

        // Fetch featured products (first 4 products)
        const productsResponse = await axios.get('https://fakestoreapi.com/products?limit=4');
        setFeaturedProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center ">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Amazing Products
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Shop the latest trends and find your perfect style with our curated collection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                </Link>
                <Link to="/categories" className="btn bg-white text-gray-900 hover:bg-gray-100">
                  Browse Categories
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold capitalize">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-xl font-semibold text-primary">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input text-gray-900 flex-1 max-w-md"
              />
              <button type="submit" className="btn bg-white text-primary hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 