import ShopLayout from "../../layouts/shopLayout";

const ShopItem = ({name}) => {
    return (
        <ShopLayout>
            <h1 className='text-center'>Produkt: {name}</h1>
        </ShopLayout>
    );
}

export const getStaticPaths = async () => {


    return {
        paths: [{ params: { name: 'owsianki' } }],
        fallback: false,
    }
}
export const getStaticProps = async ({ params }) => {


    return {
        props: {
            name: params.name,
        }
    }
}

export default ShopItem;