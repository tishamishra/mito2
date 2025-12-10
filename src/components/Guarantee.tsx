import Image from 'next/image';

export default function Guarantee() {
  return (
    <>
      <section className="header3 cid-uhfTGZCgag py-10 text-center" id="header3-7o" style={{ background: '#1098b7' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn 90 - Day Money Back Guarantee</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="header11 cid-uhfTEDrzG6 py-12 bg-white" id="header11-7n">
        <div className="container mx-auto px-4">
          <div className="row justify-center items-center flex flex-col md:flex-row gap-8">
            <div className="col-12 col-md-5 image-wrapper">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  className="w-full h-auto" 
                  src="https://ik.imagekit.io/affin/money-back-guarantee.webp?updatedAt=1765361274891" 
                  alt="Mitolyn-money-back-guarantee" 
                  width={600} 
                  height={600}
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
            <div className="col-12 col-md flex-1">
              <div className="text-wrapper text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  <strong>90-Day Money-Back Promise</strong>
                </h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  Mitolyn comes with a comprehensive 90-day satisfaction guarantee. Mitolyn's commitment to your success means that if you don't notice the difference—whether it's renewed energy, smoother metabolism, or improved overall wellness—you can simply reach out within 90 days for a prompt and courteous refund, no questions asked. <br /><br />
                  Mitolyn offers exclusive limited-time pricing when you order today from the official website. Mitolyn provides major savings on this best-selling metabolic support formula, allowing you to start your journey toward balanced energy, confidence, and lasting well-being at an exceptional value.
                </p>
                <div className="mt-6">
                  <a 
                    className="btn btn-warning bg-yellow-500 text-black px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-md font-bold hover:bg-yellow-600 transition-colors inline-flex items-center text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl w-full sm:w-auto justify-center" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Mitolyn Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

