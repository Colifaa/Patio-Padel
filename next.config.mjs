/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'], // Añade el nuevo dominio aquí
  },
};

export default nextConfig;
