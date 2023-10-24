import React, { useEffect, useState } from 'react'
import './style.css'
import cellphone from '../../assets/img/cell-section-invest.png'
import image1 from '../../assets/img/image-1.png'
import image2 from '../../assets/img/image-2.png'
import image3 from '../../assets/img/image-3.png'
import image4 from '../../assets/img/image-4.png'
import image5 from '../../assets/img/image-5.png'
import image from '../../assets/img/image.png'

export default function SectionFloat() {
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setLastScrollY(scrollY);
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const currentClass = scrollY > lastScrollY ? 'up' : 'to-down';

    return (
        <div className='float-sec'>
            <div className="float-center-cel">
                <img src={cellphone} alt="" />
                <div className="images-float-sec">
                    <div className='part-one'>
                        <div className={`image-float one ${currentClass}`}>
                            <img src={image1} alt="" />
                        </div>
                        <div className="image-float two">
                            <img src={image2} alt="" />
                        </div>
                        <div className="image-float four">
                            <img src={image4} alt="" />
                        </div>
                    </div>
                    <div className='part-two'>
                        <div className="image-float five">
                            <img src={image5} alt="" />
                        </div>
                        <div className="image-float six">
                            <img src={image} alt="" />
                        </div>
                        <div className="image-float three">
                            <img src={image3} alt="" />
                        </div>
                    </div>


                </div>
            </div>





        </div>
    )
}

