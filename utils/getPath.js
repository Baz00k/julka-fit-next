import { useRouter } from 'next/router'

function getPath() {
    const router = useRouter();
    const _pathSliceLength = Math.min.apply(Math, [
        router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
        router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
    ]);
    return router.asPath.substring(0, _pathSliceLength);
}

export default getPath;