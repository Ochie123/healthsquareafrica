'use client'
import React, { useState } from 'react'
import blogData from '@/data/Blog.json'
import BlogItem from '@/components/Blog/BlogItem';
import { useRouter } from 'next/navigation'

const BlogGridF = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 2; // Display 2 blogs per page
    const offset = currentPage * productsPerPage;
    const router = useRouter()

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog/detail1?id=${blogId}`);
    };

    let filteredData = blogData.filter(blog => {
        let isCategoryMatched = true
        isCategoryMatched = blog.category !== 'cancer'

        return isCategoryMatched
    })

    if (filteredData.length === 0) {
        filteredData = [{
            id: "no-data",
            category: "no-data",
            tag: "no-data",
            title: "no-data",
            date: "no-data",
            author: "no-data",
            avatar: "no-data",
            thumbImg: "",
            coverImg: "",
            subImg: [
                "",
                ""
            ],
            shortDesc: "no-data",
            description: "no-data",
            slug: "no-data"
        }];
    }

    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    const currentProducts = filteredData.slice(offset, offset + productsPerPage);

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>

                    <div className="list-blog grid lg:grid-cols-12 gap-8">
                        {currentProducts.map(item => (
                            <div key={item.id} className="col-span-12 lg:col-span-6">
                                <BlogItem data={item} type='style-one' />
                            </div>
                        ))}
                    </div>

        </>
    )
}

export default BlogGridF;
