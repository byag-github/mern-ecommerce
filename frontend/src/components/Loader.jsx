const Loader = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900">
			<div className="relative">
				<div className="w-20 h-20 border-indigo-200 border-4 rounded-full" />
				<div className="w-20 h-20 border-indigo-600 border-t-4 rounded-full animate-spin absolute left-0 top-0" />
				<div className="m-auto z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-200 animate-pulse">Loading</div>
			</div>
		</div>
	);
};

export default Loader;
