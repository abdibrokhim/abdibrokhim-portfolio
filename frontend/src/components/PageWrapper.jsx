import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const PageWrapper = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                {children}
            </Container>
        </>
    );
}

export default PageWrapper;