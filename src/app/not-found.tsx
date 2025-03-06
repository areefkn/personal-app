export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-600 mt-2">Oops! Halaman tidak ditemukan</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Kembali ke Beranda
            </a>
        </div>
    );
}
