import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html lang='pl'>
            <Head>
               <meta
                  name='description'
                  content='Cześć! Jestem Julka. Nauczę Cię jeść zdrowo - z głową. Ułożę dla Ciebie jadłospis i pomogę Ci w zmianie nawyków żywieniowych.'
               />
               <meta
                  name='robots'
                  content='noarchive, max-snippet:-1, max-image-preview:standard'
               />
               <meta
                  name='thumbnail'
                  content='https://cdn.julka.fit/google-thumbnail.jpg'
               />
               <link
                  rel='shortcut icon'
                  href='https://cdn.julka.fit/favicon.png'
               />
               <meta
                  property='og:title'
                  content='Julia Migdalska - Dietetyka'
               />
               <meta property='og:type' content='website' />
               <meta property='og:url' content='https://julka.fit' />
               <meta
                  property='og:image'
                  content='https://cdn.julka.fit/og-thumbnail.jpg'
               />
               <meta
                  property='og:description'
                  content='Cześć! Jestem Julka. Nauczę Cię jeść zdrowo - z głową.'
               />
               <link rel='preconnect' href='https://fonts.gstatic.com' />

               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PJ5T32L');
                        `,
                  }}
               ></script>
            </Head>
            <body>
               <Main />
               <NextScript />
               <script src='/scripts/ml.js' defer async />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
