// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { XCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PurchaseCancelPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<motion.div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
				<div className="p-6 sm:p-8">
					<div className="flex justify-center">
						<XCircle className="h-16 w-16 mb-4 text-red-500" />
					</div>
					<h1 className="text-2xl sm:text-3xl font-bold text-red-500 text-center">Purchase Cancelled</h1>
					<p className="text-gray-300 text-center mb-6">Your purchase has been cancelled.</p>
					<div className="bg-gray-700 p-4 rounded-lg mb-6">
						<p className="text-sm text-gray-400 text-center">if you have any questions or concerns, please contact our customer support team.</p>
					</div>
					<div className="space-y-4">
						<Link to={"/"} className="w-full py-2 px-4 rounded-lg bg-gray-700 text-gray-300 text-center font-bold hover:bg-gray-600 transition duration-300 flex items-center justify-center">
							<ArrowLeft className="mr-1.5" /> Return to Shop
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default PurchaseCancelPage;
