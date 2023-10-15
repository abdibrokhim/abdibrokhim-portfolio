import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import profile_photo from '.././profile_photo.png';
import PageWrapper from '../components/PageWrapper';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function HomePage() {
    const navigate = useNavigate();

    const onTutorialsClick = async () => {
        navigate(`/tutorials`);
    }

    return (
        <>
            <PageWrapper>
                <Box sx={{ marginTop: 4 }}>
                    <Avatar
                        alt="Ibrohim Abdivokhidov"
                        src={profile_photo}
                        sx={{ width: 200, height: 200, alignItems: 'center', margin: 'auto' }}
                    />
                    <Typography variant="h6" gutterBottom display="block" sx={{ marginTop: 2, fontWeight: 'bold', textAlign: 'center' }}>
                        Ibrohim Abdivokhidov
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: 2 }}>
                        <Grid item xs={6}>
                            <Item>
                                <Link href="/tutorials" underline="none" onClick={() => onTutorialsClick()} sx={{ color: 'black' }}>
                                    {'Tutorials'}
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Link href="#" underline="none" sx={{ color: 'black' }}>
                                    {'Coming Soon'}
                                </Link>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </PageWrapper>
        </>
    );
}

export default HomePage;