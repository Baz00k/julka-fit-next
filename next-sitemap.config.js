module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_DOMAIN || 'https://julka.fit',
    changeFreq: 'monthly',
    generateRobotsTxt: true,
    exclude: [
        '/404',
        '/500',
        '/_app',
        '/_document',
        '/_error',
        '/_next',
        '/_redirects',
        '/_static',
        '/_test',
        '/_test/**',
        '/_app/**',
        '/_document/**',
        '/_error/**',
        '/_next/**',
        '/dzieki',
        '/sklep/platnosc-anulowana',
        '/sklep/sukces'
    ],
}