'use client';

import React from 'react';
import { Box, Divider } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Grid from '@mui/material/Grid';

interface Blog {
  id: string;
  title: string;
  thumbImg: string;
}

interface EllipsisListProps {
  filteredResults: Blog[];
}

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.slice(0, maxLength) + '...';
};

export default function EllipsisList({ filteredResults }: EllipsisListProps) {
  const router = useRouter();

  const handleBlogClick = (blogId: string) => {
    router.push(`/blog/detail1?id=${blogId}`);
  };

  return (
    <div className="container">
      <div className="page-width">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} mt={2}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Latest blogs
            </Typography>
            <Link href="/blog" color="primary">
              Browse all {'>>>'}
            </Link>
          </Box>
          <Divider></Divider>
        </div>
      <div className="blog grid md:py-10 py-10">
        <Grid container spacing={3}>
          {filteredResults.slice(0, 8).map((blog) => (
            
            <Grid item xs={12} sm={6} key={blog.id}>
              <ListItem>
              <div key={blog.id} onClick={() => handleBlogClick(blog.id)}>
                <ListItemButton sx={{ gap: 2 }}>
                  <AspectRatio
                    sx={{
                      flexBasis: 220,
                      borderRadius: 'md',
                      overflow: 'hidden',
                    }}
                    ratio="16/9" // Set a fixed aspect ratio
                  >
                    {blog.thumbImg && (
                      <div key={blog.id}>
                        <img
                          src={blog.thumbImg}
                          className="card-img-top"
                          alt={blog.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain', // Ensure the image contains the entire container
                            objectPosition: 'center', // Center the image within the container
                          }}
                        />
                      </div>
                    )}
                  </AspectRatio>
                  <ListItemContent>
                  <Typography fontWeight="xl">{truncateTitle(blog.title, 50)}</Typography>
                  </ListItemContent>
                </ListItemButton>
                </div>
              </ListItem>
              {blog !== filteredResults[filteredResults.length - 1] && <ListDivider />}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
