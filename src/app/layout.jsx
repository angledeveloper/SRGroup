import GlobalNavBar from './GlobalNavBar';
import GlobalFooter from './GlobalFooter';
import './globals.css';
import ProviderShell from './ProviderShell';
import Script from 'next/script';
import UTMInit from './UTMInit';

export const metadata = {
  title:
    'RR Landmarks-Real estate in Pune | New residential and commercial projects in Pune',
  description:
    'Discover RR Landmarks, a trusted real estate developer in Pune offering premium residential and commercial projects with modern amenities, great connectivity, and value.',
  authors: [{ name: 'Angle.services', url: 'https://angle.services' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Search Console Verification */}
        <meta
          name='google-site-verification'
          content='uq7df0Cc-knhKGzX2SCk0IMxvyUuFc0790qK1rjZLQs'
        />

        {/* Google Tag Manager */}
        <Script id='gtm-init' strategy='beforeInteractive'>
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5XF78N9R');
      `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className='font-sans'>
        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XWV148HD8M'
          strategy='afterInteractive'
        />
        <Script id='ga-gtag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XWV148HD8M');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5XF78N9R'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ProviderShell>
          <GlobalNavBar />
          {children}
          <GlobalFooter />
        </ProviderShell>
        <UTMInit />
      </body>
    </html>
  );
}
