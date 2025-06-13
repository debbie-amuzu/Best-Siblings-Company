import { products } from "../data/products";

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Spice Blog
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Discover recipes, health tips, and stories about our spices
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gold-600">
                    {post.category}
                  </p>
                  <a href={`/blog/${post.id}`} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
