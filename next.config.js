/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:"/http://localhost:3000",
  images:{
    domains:['images.unsplash.com' ,'res.cloudinary.com']
  }
}

module.exports = nextConfig
