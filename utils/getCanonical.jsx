import getPath from "./getPath";

function getCanonical() {
    const path = getPath();
    const CANONICAL_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

    const link = <link rel="canonical" href={`https://${CANONICAL_DOMAIN + path}/`} />;
    return link;
}

export default getCanonical;