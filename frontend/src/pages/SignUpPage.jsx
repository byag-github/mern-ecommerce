import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	// zustand done
	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<motion.div className="sm:mx-auto sm:w-full sm:max-w-md" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
				<h2 className="mt-2 text-center text-3xl font-bold text-indigo-400">Create an Account</h2>
			</motion.div>

			<motion.div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
				<div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* full name */}
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-300">
								Full Name
							</label>
							<div className="mt-2 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<User className="w-5 h-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="name"
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border-2 border-gray-500 shadow:sm placeholder-gray-400 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
									placeholder="Enter a Name"
									required
								/>
							</div>
						</div>

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
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border-2 border-gray-600 shadow:sm placeholder-gray-400 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
									placeholder="**Password**"
									required
								/>
							</div>
						</div>

						{/* confirm password */}
						<div>
							<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
								Confirm Password
							</label>
							<div className="mt-2 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Lock className="w-5 h-5 text-gray-400" aria-hidden="true" />
								</div>
								<input
									id="confirmPassword"
									type="password"
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className="block w-full px-3 py-2 pl-10 bg-gray-700 border-2 border-gray-600 shadow:sm placeholder-gray-400 focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm rounded-md"
									placeholder="**Confirm the Password**"
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
									<UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
									Sign Up
								</>
							)}
						</button>
					</form>

					{/* login link */}
					<p className="mt-8 text-center text-sm text-gray-400">
						Already have an account?{" "}
						<Link to="/login" className="font font-medium text-indigo-400 hover:text-indigo-200 transition duration-200 ease-in-out">
							Login here <ArrowRight className="inline mb-1 h-4 w-4" />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};
export default SignUpPage;
