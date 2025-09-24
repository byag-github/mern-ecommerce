import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header
			className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40
        transitioln-all duration-300 border-b border-indigo-800"
		>
			<div className="container mx-auto px-1 py-5">
				<div className="flex flex-wrap justify-between items-center">
					<Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-200 transition duration-300 ease-in-out items-center space-x-2 flex">
						E-Commerce
					</Link>

					{/* Navbar */}
					<nav className="flex flex-wrap items-center gap-4">
						<Link to={"/"} className="text-gray-200 hover:text-indigo-400 transition duration-300 ease-in-out">
							Home
						</Link>

						{user && (
							<Link to={"/cart"} className="relative group text-gray-200 hover:text-indigo-400 transition duration-300 ease-in-out">
								<ShoppingCart className="inline-block mr-1 group-hover:text-indigo-400 " size={20} />
								<span className="hidden sm:inline">Cart</span>
								{cart.length > 0 && <span className="absolute -top-2 -left-2 bg-indigo-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-indigo-400 transition duration-100 ease-in-out">{cart.length}</span>}
							</Link>
						)}

						{isAdmin && (
							<Link className="flex items-center bg-indigo-700 hover:bg-indigo-500 text-white font-medium px-3 py-1 rounded-md transition duration-300 ease-in-out" to="/dashboard">
								<Lock className="inline-block mr-1" size={18} />
								<span className="hidden sm:inline">Dashboard</span>
							</Link>
						)}

						{user ? (
							<button className="flex items-center bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out" onClick={logout}>
								<LogOut size={18} />
								<span className="hidden sm:inline ml-2">Log out</span>
							</button>
						) : (
							<>
								<Link to={"/signup"} className="flex items-center bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
									<UserPlus className="mr-2" size={18} />
									Sign Up
								</Link>

								<Link to={"/login"} className="flex items-center bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
									<LogIn className="mr-2" size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
					{/* Navbar End*/}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
