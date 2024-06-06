'use client';
import React from 'react';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import TagType from './tagtype';
import styled from "styled-components";
import Link from 'next/link';

const Main = styled.main`
  margin: 1em;
`;

const TagTypes = () => (
  <>
    <div className="page-width">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} mt={4}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          EXPLORE BY
        </Typography>
        <Link href="/blog" color="primary">
          View all {'>>>'}
        </Link>
      </Box>
    </div>
    <Divider></Divider>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: '100%',
        margin: 0,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
          flexShrink: 0, // Prevent shrinking
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <TagType />
    </Box>
  </>
);

export default TagTypes;

