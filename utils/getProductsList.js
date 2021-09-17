const SK = process.env.STRIPE_SK;
const stripe = require('stripe')(SK);

export default async function getProductsList() {
    const products = await stripe.products.list();
    const prices = await stripe.prices.list();

    const productsList = products.data;
    const pricesList = prices.data;

    const filteredList = productsList.map((productData) => {
        const priceData = pricesList.find(price => price.product == productData.id);
        const { id, currency, product, unit_amount } = priceData;
        const { description, images, metadata, name, url } = productData;
        const link = url || metadata.link;
        const combined = { link, id, currency, product, unit_amount, description, images, name };
        return combined;
    })

    return { data: filteredList };
}