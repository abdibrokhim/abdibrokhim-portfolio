import PageWrapper from '../components/PageWrapper';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import jsonData from '.././tutorials.json';

export default function TutorialsPage() {
  return (
    <>
      <PageWrapper>
        <Box sx={{ marginTop: 4 }}>
          <Grid spacing={4} sx={{ marginTop: 2 }}>
            {Object.keys(jsonData).map((key) => {
              const item = jsonData[key];
              return (
                <Grid item xs={4} key={key} sx={{ marginBottom: 4 }}>
                  <Card>
                    <CardActionArea href={item.link} target='_blank'>
                      <CardMedia
                        component="img"
                        height="full"
                        image={item.image}
                        alt={item.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </PageWrapper>
    </>
  );
}
