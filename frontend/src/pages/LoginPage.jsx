import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// zustand done
	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		login(email, password);
	};

	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<motion.div className="sm:mx-auto sm:w-full sm:max-w-md" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
				<h2 className="mt-2 text-center text-3xl font-bold text-indigo-400">Let's Shopping!</h2>
			</motion.div>

			<motion.div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
				<div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* email */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-300">
								Email Address
							</label>
							<div className="mt-2 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Mail className="w-5 h-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border-2 border-gray-600 shadow:sm placeholder-gray-400 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
									placeholder="Example@mail.com"
									required
								/>
							</div>
						</div>

						{/* password */}
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-300">
								Password
							</label>
							<div className="mt-2 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Lock className="w-5 h-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border-2 border-gray-600 shadow:sm placeholder-gray-400 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
									placeholder="**Password**"
									required
								/>
							</div>
						</div>

						{/* submit button */}
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out disabled:opacity-50"
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className="animate-spin mr-2 h-5 w-5" aria-hidden="true" />
									Loading...
								</>
							) : (
								<>
									<LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
									Login
								</>
							)}
						</button>
					</form>

					{/* login link */}
					<p className="mt-8 text-center text-sm text-gray-400">
						Not a member?{" "}
						<Link to="/signup" className="font font-medium text-indigo-400 hover:text-indigo-200 transition duration-200 ease-in-out">
							Sign Up now <ArrowRight className="inline mb-1 h-4 w-4" />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default LoginPage;
