import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();
	const [error, setError] = useState(null);

	useEffect(() => {
		const handleCheckoutSuccess = async (sessionId) => {
			try {
				await axios.post("/payments/checkout-success", { sessionId });
				clearCart();
			} catch (error) {
				console.log(error);
			} finally {
				setIsProcessing(false);
			}
		};

		const sessionId = new URLSearchParams(window.location.search).get("session_id");
		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			setError("Session ID not found");
		}
	}, [clearCart]);

	if (isProcessing) return "Processing...";
	if (error) return `Error: ${error}`;

	return (
		<div className="h-screen flex items-center justify-center px-4">
			<Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.1} style={{ zIndex: 99 }} numberOfPieces={900} recycle={false} />

			<div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden relative z-10">
				<div className="p-6 sm:p-8">
					<div className="flex justify-center">
						<CheckCircle className="w-16 h-16 mb-4 text-green-500" />
					</div>
					<h1 className="text-center text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">Purchase Successful!</h1>
					<p className="text-center text-white mb-4">Thank you for your order. {"We're"} processing it now.</p>

					<div className="bg-gray-700 rounded-lg p-4 mb-6">
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm text-gray-400">Order Number</span>
							<span className="text-sm font-semibold text-indigo-400">#12345</span>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-400">Estimated delivery</span>
							<span className="text-sm font-semibold text-indigo-400">3-5 business days</span>
						</div>
					</div>

					<div className="space-y-4">
						<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
							<HandHeart className="mr-2" size={18} />
							Thank You!
						</button>
						<Link to={"/"} className="w-full bg-gray-700 hover:bg-gray-600 text-indigo-400 font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
							Continue Shopping
							<ArrowRight className="ml-2" size={18} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaseSuccessPage;
