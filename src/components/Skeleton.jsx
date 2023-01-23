import ContentLoader from 'react-content-loader'

function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={285}
            height={500}
            viewBox="0 0 285 500"
            backgroundColor="#343739"
            foregroundColor="#232526ab"
        >
            <rect x="15" y="25" rx="10" ry="10" width="270" height="320"/>
            <rect x="15" y="375" rx="10" ry="10" width="270" height="60"/>
        </ContentLoader>
    )
}

export default Skeleton