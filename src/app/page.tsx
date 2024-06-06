import React, { Suspense } from 'react';
import Card from "@mui/material/Card";
import MenuOne from '../components/Header/Menu/MenuOne';
import { Products, Tagtypes } from "@/components/Home1/homepage";
import Featured from '@/components/Featured/Featured';
import Footer from '@/components/Footer/Footer';
import BlogGridF from './blog/front/page';
import EllipsisList from '@/components/Home1/blogs/blog';
import blogData from '@/data/Blog.json';

export default function Home() {
  return (
    <>
      <Suspense>
        <div id="header" className='relative w-full'>
          <MenuOne props="bg-transparent" />
          <br></br>
          <div className="container">
            <div className='blog grid md:py-10 py-10 '>
              <BlogGridF/>
            </div>
           
            <Tagtypes/>
            <EllipsisList filteredResults={blogData} />
            <br></br>
            <Card
              sx={{
                p: 2,
                mx: { xs: 2, lg: 3 },
                mt: 2,
                mb: 4,
              }}
            > 
              <Featured />
            </Card>  
            <Products />
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
