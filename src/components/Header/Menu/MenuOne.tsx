'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useRouter } from 'next/navigation';

interface Props {
    props: string;
}

const MenuOne: React.FC<Props> = ({ props }) => {
    const router = useRouter()
    const pathname = usePathname()
    let [selectedType, setSelectedType] = useState<string | null>()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalSearch } = useModalSearchContext()

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    const handleTypeClick = (type: string) => {
        setSelectedType(type)
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? 'fixed' : 'absolute'} top-0 left-0 right-0 w-full md:h-[74px] h-[56px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <div className="left flex items-center gap-16">
                        <Link href='/' className='flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2'>
                        <Image 
                            src='/images/cropped-Logo-scaled-1-1 2.png.webp' 
                            alt='HealthSquare Logo' 
                            width={100} // specify the width of your logo
                            height={50} // specify the height of your logo
                            className="heading4"
                        />
                        </Link>
                            <div className="menu-main h-full max-lg:hidden">
                                <ul className='flex items-center gap-8 h-full'>
                                <li className='h-full'>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/blog/') ? 'active' : ''}`}
                                        >
                                            Health Conditions
                                        </Link>
                                        <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                            <div className="container">
                                                <div className="flex justify-between py-8">
                                                <div className="nav-link flex justify-between w-full px-5 xl:px-14">
                                                    <div className="nav-item flex-1 mx-2">
                                                    <div className="text-button-uppercase pb-2">Featured</div>
                                                    <ul>
                                                        <li>
                                                        <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                            Breast Cancer
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/ibd" className={`link text-secondary duration-300 ${pathname === '/ibde' ? 'active' : ''}`}>
                                                            IBD
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/migraine" className={`link text-secondary duration-300 ${pathname === '/blog/migraine' ? 'active' : ''}`}>
                                                            Migraine
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/sclerosis" className={`link text-secondary duration-300 ${pathname === '/blog/sclerosis' ? 'active' : ''}`}>
                                                            Multiple Sclerosis (MS)
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/arthritis" className={`link text-secondary duration-300 ${pathname === '/blog/arthritis' ? 'active' : ''}`}>
                                                            Rheumatoid Arthritis
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/diabetes" className={`link text-secondary duration-300 ${pathname === '/diabetes' ? 'active' : ''}`}>
                                                            Type 2 Diabetes
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                    <div className="nav-item flex-1 mx-2">
                                                    <div className="text-button-uppercase pb-2">Articles</div>
                                                    <ul>
                                                        <li>
                                                        <Link href="/blog/acid" className={`link text-secondary duration-300 ${pathname === '/blog/acid' ? 'active' : ''}`}>
                                                            Acid Reflux
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/adh" className={`link text-secondary duration-300 ${pathname === '/blog/adh' ? 'active' : ''}`}>
                                                            ADHD
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/allergies" className={`link text-secondary duration-300 ${pathname === '/blog/allergies' ? 'active' : ''}`}>
                                                            Allergies
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/dementia" className={`link text-secondary duration-300 ${pathname === '/blog/dementia' ? 'active' : ''}`}>
                                                            Alzheimers and Dementia
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/cancer" className={`link text-secondary duration-300 ${pathname === '/blog/cancer' ? 'active' : ''}`}>
                                                            Cancer
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                    <div className="nav-item flex-1 mx-2">
                                                    <ul>
                                                        <li>
                                                        <Link href="/blog/chronic" className={`link text-secondary duration-300 cursor-pointer ${pathname === '/blog/chronic' ? 'active' : ''}`}>
                                                            Chronic Pain
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/hiv-aids" className={`link text-secondary duration-300 cursor-pointer ${pathname === '/blog/hiv-aids' ? 'active' : ''}`}>
                                                            HIV/AIDS
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/cold" className={`link text-secondary duration-300 cursor-pointer ${pathname === '/blog/cold' ? 'active' : ''}`}>
                                                            Cold & Flu
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/pcopd" className={`link text-secondary duration-300 cursor-pointer ${pathname === '/blog/pcopd' ? 'active' : ''}`}>
                                                            PCOPD
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/depression" className={`link text-secondary duration-300 cursor-pointer ${pathname === '/blog/depression' ? 'active' : ''}`}>
                                                            Depression
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                    </li>
                                    <li className='h-full'>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/blog/') ? 'active' : ''}`}
                                        >
                                            Discover
                                        </Link>
                                        <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                            <div className="nav-link flex justify-between w-full px-5 xl:px-14">
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Wellness Topics</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/nutrition" className={`link text-secondary duration-300 ${pathname === '/blog/nutrition' ? 'active' : ''}`}>
                                                        Nutrition
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/fitness" className={`link text-secondary duration-300 ${pathname === '/blog/fitness' ? 'active' : ''}`}>
                                                        Fitness
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/skincare" className={`link text-secondary duration-300 ${pathname === '/blog/skincare' ? 'active' : ''}`}>
                                                        Skin Care
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sexualhealth" className={`link text-secondary duration-300 ${pathname === '/blog/sexualhealth' ? 'active' : ''}`}>
                                                        Sexual Health
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">blog Reviews</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/vitamin" className={`link text-secondary duration-300 ${pathname === '/blog/vitamin' ? 'active' : ''}`}>
                                                        Vitamins & Supplements
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sleep" className={`link text-secondary duration-300 ${pathname === '/blog/sleep' ? 'active' : ''}`}>
                                                        Sleep
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental" className={`link text-secondary duration-300 ${pathname === '/blog/mental' ? 'active' : ''}`}>
                                                        Mental Health
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/nutrition" className={`link text-secondary duration-300 ${pathname === '/blog/nutrition' ? 'active' : ''}`}>
                                                        Nutrition
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/home-testing" className={`link text-secondary duration-300 ${pathname === '/blog/home-testing' ? 'active' : ''}`}>
                                                        At-Home Testing
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Original Series</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/fast-foods" className={`link text-secondary duration-300 ${pathname === '/blog/fast-foods' ? 'active' : ''}`}>
                                                        Fresh Fast foods
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/diagnosis" className={`link text-secondary duration-300 ${pathname === '/blog/diagnosis' ? 'active' : ''}`}>
                                                        Diagnosis Diaries
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                        You’re Not Alone
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Video Series</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/youth-focus" className={`link text-secondary duration-300 ${pathname === '/blog/youth-focus' ? 'active' : ''}`}>
                                                        Youth in focus(Mental Health)
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/healthy-harvest" className={`link text-secondary duration-300 ${pathname === '/blog/healthy-harvest' ? 'active' : ''}`}>
                                                        Health Harvest
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                        You’re Not Alone
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className='h-full'>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/blog/') ? 'active' : ''}`}
                                        >
                                            Plan
                                        </Link>
                                        <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                            <div className="nav-link flex justify-between w-full px-5 xl:px-14">
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Health Challenges</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/mindful" className={`link text-secondary duration-300 ${pathname === '/blog/mindful' ? 'active' : ''}`}>
                                                    Mindful Eating
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sugar" className={`link text-secondary duration-300 ${pathname === '/blog/sugar' ? 'active' : ''}`}>
                                                        Sugar Savy
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/move-your-body" className={`link text-secondary duration-300 ${pathname === '/blog/move-your-body' ? 'active' : ''}`}>
                                                    Move Your Body
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Gut Health
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Find Care</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Primary Care
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                        Mental Health
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/ob-gvn" className={`link text-secondary duration-300 ${pathname === '/blog/ob-gv' ? 'active' : ''}`}>
                                                    OB-GYN
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/dermatologists" className={`link text-secondary duration-300 ${pathname === '/blog/dermatologists' ? 'active' : ''}`}>
                                                        Dermatologists
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/home-testing" className={`link text-secondary duration-300 ${pathname === '/blog/home-testing' ? 'active' : ''}`}>
                                                        At-Home Testing
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Lifestyle Quizzes</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Weight Management
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                    Am I Depressed? A Quiz for Teens
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Are You a Workaholic?
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Tools & Resources</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Health News
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                    Find a Diet
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Find Healthy Snacks
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Drugs A-Z
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className='h-full'>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/blog/') ? 'active' : ''}`}
                                        >
                                            Connect
                                        </Link>
                                        <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                            <div className="nav-link flex justify-between w-full px-5 xl:px-14">
                                                <div className="nav-item flex-1">
                                                <div className="text-button-uppercase pb-2">Find Your Community</div>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                    Breast Cancer
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Prostrate Cancer
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                            
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Inflammatory Bowel Disease
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                        Migraine
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                        
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Weight Management
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item flex-1">
                                             
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Depression
                                                    </Link>
                                                    </li>

                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right flex gap-12">
                            <div className="max-md:hidden search-icon flex items-center cursor-pointer relative">
                                <Icon.MagnifyingGlass size={24} color='black' onClick={openModalSearch} />
                                <div className="line absolute bg-line w-px h-6 -right-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
                <div className="menu-container bg-white h-full">
                    <div className="container h-full">
                        <div className="menu-main h-full overflow-hidden">
                            <div className="heading py-2 relative flex items-center justify-center">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={14} />
                                </div>
                                <Link href='/' className='flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2'>
                                    <Image 
                                        src='/images/cropped-Logo-scaled-1-1 2.png.webp' 
                                        alt='HealthSquare Logo' 
                                        width={100} // specify the width of your logo
                                        height={50} // specify the height of your logo
                                        className="heading4"
                                    />
                                </Link>
                            </div>
                            <div className="form-search relative mt-2">
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                <input type="text" placeholder='What are you looking for?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
                            </div>
                            <div className="list-nav mt-6">
                                <ul>
                                    <li
                                        className={`${openSubNavMobile === 1 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(1)}
                                    >
                                        <a href={'#!'} className={`text-xl font-semibold flex items-center justify-between`}>Health Conditions
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(1)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Featured</div>
                                                        <ul>
                                                        <li>
                                                        <Link href="/blog/default" className={`link text-secondary duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                            Breast Cancer
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                            IBD
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/migraine" className={`link text-secondary duration-300 ${pathname === '/blog/migraine' ? 'active' : ''}`}>
                                                            Migraine
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/sclerosis" className={`link text-secondary duration-300 ${pathname === '/blog/sclerosis' ? 'active' : ''}`}>
                                                            Multiple Sclerosis (MS)
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/arthritis" className={`link text-secondary duration-300 ${pathname === '/blog/arthritis' ? 'active' : ''}`}>
                                                            Rheumatoid Arthritis
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/diabetes" className={`link text-secondary duration-300 ${pathname === '/blog/diabetes' ? 'active' : ''}`}>
                                                            Type 2 Diabetes
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Articles</div>
                                                        <ul>
                                                        <li>
                                                        <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                            Acid Reflux
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                            ADHD
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/discount" className={`link text-secondary duration-300 ${pathname === '/blog/discount' ? 'active' : ''}`}>
                                                            Allergies
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/sidebar" className={`link text-secondary duration-300 ${pathname === '/blog/sidebar' ? 'active' : ''}`}>
                                                            Alzheimers and Dementia
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href="/blog/home-testing" className={`link text-secondary duration-300 ${pathname === '/blog/home-testing' ? 'active' : ''}`}>
                                                            Cancer
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    </div>

                                                </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(2)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Discover
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(2)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Wellness Topics</div>
                                                        <ul>
                                                    <li>
                                                    <Link href="/blog/nutrition" className={`link text-secondary duration-300 ${pathname === '/blog/nutrition' ? 'active' : ''}`}>
                                                        Nutrition
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                        Fitness
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/migraine" className={`link text-secondary duration-300 ${pathname === '/blog/migraine' ? 'active' : ''}`}>
                                                        Skin Care
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sclerosis" className={`link text-secondary duration-300 ${pathname === '/blog/sclerosis' ? 'active' : ''}`}>
                                                        Sexual Health
                                                    </Link>
                                                    </li>
                                                </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">blog Reviews</div>
                                                        <ul>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                        Vitamins & Supplements
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                        Sleep
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/discount" className={`link text-secondary duration-300 ${pathname === '/blog/discount' ? 'active' : ''}`}>
                                                        Mental Health
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sidebar" className={`link text-secondary duration-300 ${pathname === '/blog/sidebar' ? 'active' : ''}`}>
                                                        Nutrition
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/home-testing" className={`link text-secondary duration-300 ${pathname === '/blog/home-testing' ? 'active' : ''}`}>
                                                        At-Home Testing
                                                    </Link>
                                                    </li>
                                                </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Original Series</div>
                                                        <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                        Fresh Fast foods
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                        Diagnosis Diaries
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                        You’re Not Alone
                                                    </Link>
                                                    </li>
                                                </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Video Series</div>
                                                        <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                        Youth in focus(Mental Health)
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                        Health Harvest
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                        You’re Not Alone
                                                    </Link>
                                                    </li>
                                                </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 3 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(3)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Plan
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(3)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="">
                                                    <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Health Challenges</div>
                                                            <ul>
                                                    <li>
                                                    <Link href="/blog/default" className={`link text-secondary duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                    Mindful Eating
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                        Sugar Savy
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/migraine" className={`link text-secondary duration-300 ${pathname === '/blog/migraine' ? 'active' : ''}`}>
                                                    Move Your Body
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sclerosis" className={`link text-secondary duration-300 ${pathname === '/blog/sclerosis' ? 'active' : ''}`}>
                                                    Gut Health
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Find Care</div>
                                                   <ul>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Primary Care
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                        Mental Health
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/discount" className={`link text-secondary duration-300 ${pathname === '/blog/discount' ? 'active' : ''}`}>
                                                    OB-GYN
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/sidebar" className={`link text-secondary duration-300 ${pathname === '/blog/sidebar' ? 'active' : ''}`}>
                                                        Dermatologists
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/home-testing" className={`link text-secondary duration-300 ${pathname === '/blog/home-testing' ? 'active' : ''}`}>
                                                        At-Home Testing
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Lifestyle Quizzes</div>
                                                            <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Weight Management
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                    Am I Depressed? A Quiz for Teens
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Are You a Workaholic?
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Tools & Resources</div>
                                                            <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Health News
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/am-i-depressed" className={`link text-secondary duration-300 ${pathname === '/blog/am-i-depressed' ? 'active' : ''}`}>
                                                    Find a Diet
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Find Healthy Snacks
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/not-alone" className={`link text-secondary duration-300 ${pathname === '/blog/not-alone' ? 'active' : ''}`}>
                                                    Drugs A-Z
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 4 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(4)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Connect
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(4)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="">
                                                    <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Find Your Community</div>
                                                            <ul>
                                                    <li>
                                                    <Link href="/blog/breast" className={`link text-secondary duration-300 ${pathname === '/blog/breast' ? 'active' : ''}`}>
                                                    Breast Cancer
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Prostrate Cancer
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            
                                                        <ul>
                                                    <li>
                                                    <Link href="/blog/gut" className={`link text-secondary duration-300 ${pathname === '/blog/gut' ? 'active' : ''}`}>
                                                    Inflammatory Bowel Disease
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog/mental-health" className={`link text-secondary duration-300 ${pathname === '/blog/mental-health' ? 'active' : ''}`}>
                                                        Migraine
                                                    </Link>
                                                    </li>
                                                </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                         
                                                            <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Weight Management
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="nav-item">
                                                <ul>
                                                    <li>
                                                    <Link href="/blog/weight-management" className={`link text-secondary duration-300 ${pathname === '/blog/weight-management' ? 'active' : ''}`}>
                                                    Depression
                                                    </Link>
                                                    </li>

                                                </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOne