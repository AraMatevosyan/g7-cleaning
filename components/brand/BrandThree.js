import React from 'react'
import { BrandThreeData } from '../../data/brand';

const BrandThree = () => {
    return (
        <>
            <section class="client-page">
                <div class="container">
                    <div class="row">
                        {BrandThreeData.map((item, i) => (
                            <div key={i} class="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay={item.delay}>
                                <div class="client-page__single text-center">
                                    <a href={item.link}><img src={item.image} alt={item.alt} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandThree;
