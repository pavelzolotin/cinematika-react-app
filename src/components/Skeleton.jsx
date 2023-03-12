import ContentLoader from 'react-content-loader';

const Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={500}
            viewBox="0 0 300 500"
            backgroundColor="#7c7c7c"
            foregroundColor="#a5a5a5"
        >
            <rect x="0" y="0" rx="5" ry="0" width="300" height="340"/>
            <rect x="0" y="390" rx="0" ry="5" width="300" height="60"/>
        </ContentLoader>
    );
};

export default Skeleton;