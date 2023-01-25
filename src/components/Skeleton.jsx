import ContentLoader from 'react-content-loader'

function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={500}
            viewBox="0 0 300 500"
            backgroundColor="#817c7c"
            foregroundColor="#444444d4"
        >
            <rect x="0" y="0" rx="10" ry="0" width="300" height="340"/>
            <rect x="0" y="390" rx="0" ry="10" width="300" height="60"/>
        </ContentLoader>
    )
}

export default Skeleton