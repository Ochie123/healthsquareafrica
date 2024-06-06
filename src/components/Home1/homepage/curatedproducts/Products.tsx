'use client';

import * as React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import blogData from '@/data/Blog.json'; // Import the blog data
import Product from './Product'; // Adjust the path if necessary

const Main = styled.main`
  margin: 1em;
`;

interface Blog {
  id: string;
  title: string;
  thumbImg: string;
}

function Products() {
  const router = useRouter();

  const handleBlogClick = (blogId: string) => {
    router.push(`/blog/detail1?id=${blogId}`);
  };

  const data: Blog[] = blogData; // Use blog data from JSON

  return (
    <>
      <div className="page-width">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">MORE TOP READS</Typography>
        </Box>
      </div>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          py: 1,
          mt: 4,
          overflow: 'auto',
          width: 'auto',
          margin: 0,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.slice(0, 10).map((blog) => (
          <div key={blog.id} onClick={() => handleBlogClick(blog.id)}>
            <Product blog={blog} />
          </div>
        ))}
      </Box>
    </>
  );
}

export default Products;
