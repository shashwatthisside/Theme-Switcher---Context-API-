import React from 'react'
import heroImagebw from '../assets/heroImagebw.jpg'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
            <a href="https://www.linkedin.com/in/shashwat-dwivedi-563a511aa/" target='_blank'>
                <img className="p-8 rounded-full" src={heroImagebw} alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Hire me In Your Front-End Developer Team
                    </h5>
                    <h4 className='mt-4 dark:text-white'>To Know more, Please click anywhere on the card</h4>
                </a>
            </div>
        </div>
    );
}
