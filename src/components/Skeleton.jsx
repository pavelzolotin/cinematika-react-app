import ContentLoader from 'react-content-loader'

function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={500}
            viewBox="0 0 285 500"
            backgroundColor="#343739"
            foregroundColor="#565656d1"
        >
            <rect x="5" y="25" rx="10" ry="10" width="275" height="320"/>
            <rect x="5" y="375" rx="10" ry="10" width="275" height="60"/>
        </ContentLoader>
    )
}

export default Skeleton