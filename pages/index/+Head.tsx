export default function Head() {
  // Базовые данные для мета-тегов
  const title = 'Frontend-разработчик | Портфолио'
  const description =
    'Frontend-разработчик. Специализируюсь на React, TypeScript, Next.js. Создаю современные веб-приложения с отличным UX/UI.'
  const siteName = 'Frontend Developer Portfolio'
  const siteUrl = 'https://rybin-website.vercel.app' // Актуальный URL
  // Принудительно используем абсолютные URL для всех мета-тегов
  const pageUrl = siteUrl // Полный URL страницы для og:url и canonical
  const imageUrl = `${siteUrl}/preview.png` // Абсолютный URL для изображения

  return (
    <>
      {/* Базовые мета-теги */}
      <title>{title}</title>
      <meta httpEquiv="content-language" content="ru" />
      <meta name="language" content="Russian" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="frontend, developer, react, typescript, nextjs, javascript, веб-разработчик, фронтенд"
      />
      <meta name="author" content="Артем Рыбин" />

      {/* Viewport и кодировка (убираем дублирование) */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* Open Graph мета-теги для Facebook, LinkedIn и других соцсетей */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Портфолио Frontend-разработчика" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Портфолио Frontend-разработчика" />

      {/* Дополнительные мета-теги для лучшего SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="format-detection" content="telephone=no" />

      {/* Microsoft/Windows мета-теги */}
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* PWA мета-теги */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Портфолио" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Портфолио" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Фавиконки и иконки */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Prefetch для важных ресурсов */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}
