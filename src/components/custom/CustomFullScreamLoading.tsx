export const CustomFullScreamLoading = () => {
  return (
    <div className="flex flex-col fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="h-16 w-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      <p className="font-montserrat text-xl">Espere un momento...</p>
    </div>
  );
};
