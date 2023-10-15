import PageWrapper from '../components/PageWrapper';

function NoMatchPage() {
    return (
        <>
            <PageWrapper>
                <div 
                    style={{
                        fontSize: '10rem',
                        }}>
                    404
                </div>
                <div 
                    style={{
                        fontSize: '2rem',
                    }}>
                    Page not found
                </div>
            </PageWrapper>
        </>
    );
}

export default NoMatchPage;