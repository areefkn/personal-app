import React from 'react';

export default function NotFound() {
    return (
        <main className="h-screen flex flex-col items-center justify-center text-center" role="main" aria-labelledby="not-found-heading">
            <h1 id="not-found-heading" className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-600 mt-2">Oops! Halaman tidak ditemukan</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Kembali ke Beranda
            </a>
        </main>
    );
}
