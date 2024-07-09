/** @type {import('next').NextConfig} */
onst nextConfig = {
  //   images, когда изб. использовано строннего истосника надо указать обязательно
  //   poweredByHeader чтобы не узнали на чем написан сайт
  //   experimental: {
  //     optimizePackageImports: ["названия модуля","названия модуля","названия модуля"],
  //   },
  //   webpack: {}, для webpack
  images: {
    domains: ["localhost"],
  },

module.exports = nextConfig
