import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/creative", name: "Creative Toys", imageUrl: "/creativeToys.webp" },
	{ href: "/education", name: "Education Toys", imageUrl: "/educationToys.webp" },
	{ href: "/music", name: "Music Toys", imageUrl: "/musicToys.webp" },
	{ href: "/puzzle", name: "Puzzle Toys", imageUrl: "/puzzleToys.webp" },
	{ href: "/statue", name: "Statue Toys", imageUrl: "/statueToys.webp" },
	{ href: "/stem", name: "Stem Toys", imageUrl: "/stemToys.webp" },
	{ href: "/traditional", name: "Traditional Toys", imageUrl: "/traditionalToys.webp" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className="relative min-h-screen text-white overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-center text-4xl font-bold text-indigo-400 sm:text-5xl mb-4">Explore Our Toys Collection</h1>
				<p className="text-center text-gray-300 text-xl mb-12">Discover our fun toy in Kids Toys </p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-80">
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};

export default HomePage;
