import Image from 'next/image';

export default function WhatIsMitolyn() {
  return (
    <>
      <section className="content4 cid-uwxKLxAzbL py-10 text-center" id="mitolyn-about" style={{ background: '#1098b7' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Why Choose Mitolyn?</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="image2 cid-uwxLwAOlez py-12 bg-white" id="image2-b">
        <div className="container mx-auto px-4">
          <div className="row align-items-center flex flex-col lg:flex-row gap-8">
            <div className="col-12 col-lg-5">
              <div className="image-wrapper">
                <img 
                  src="https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900" 
                  alt="Mitolyn Supplement" 
                  title="Mitolyn"
                  className="w-full h-auto rounded-lg shadow-xl"
                  style={{ 
                    maxWidth: '100%', 
                    width: '100%',
                    height: 'auto',
                    minHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-2 text-2xl md:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>What is Mitolyn?</strong>
                </h3>
                <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  Mitolyn is an advanced nutritional supplement formulated to rejuvenate and maintain healthy mitochondrial activity—the essential "power centers" of each cell that transform nutrients into usable energy. Mitolyn addresses the root cause of metabolic slowdown by supporting cellular energy production, metabolic responsiveness, and everyday vitality.
                  <br /><br />
                  Mitolyn features a clean, naturally inspired formulation powered by plant-based extracts and antioxidants. Mitolyn is completely free of artificial stimulants or harsh fillers. Mitolyn is manufactured in FDA-registered and GMP-certified facilities that uphold rigorous safety and purity standards, ensuring each batch is non-GMO, soy-free, and dairy-free.
                  <br /><br />
                  Mitolyn acts as a daily partner for wellness and energy renewal. Mitolyn combats routine fatigue, promotes efficient metabolism, and supports graceful aging—helping you feel vibrant, focused, and strong from morning to night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

