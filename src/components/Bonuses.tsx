import Image from 'next/image';

export default function Bonuses() {
  return (
    <>
      <section className="header3 cid-udGvtAJfqr py-10 text-center" id="header3-7i" style={{ background: '#1098b7' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Order 6 Bottles or 3 Bottles</strong>
                <div><strong>and Get 2 FREE Bonuses!</strong></div>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwp5OzT8i9 py-12 bg-white" id="team2-8d">
        <div className="container mx-auto px-4" style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '85%' }}>
          <div className="item features-image bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="item-wrapper">
              <div className="row align-items-center flex flex-col md:flex-row gap-6">
                <div className="col-12 col-md-5">
                  <div className="image-wrapper">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-bonus.webp?updatedAt=1765361274887" 
                      alt="Mitolyn bonus 2" 
                      width={600} 
                      height={600}
                      className="w-full h-auto rounded-lg shadow-xl"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '400px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md flex-1">
                  <div className="card-box">
                    <h5 className="card-title mb-3 text-2xl md:text-3xl font-bold" style={{ color: '#e6502b' }}>
                      <strong>BONUS #1: 1-Day Kickstart Detox</strong>
                    </h5>
                    <h6 className="card-subtitle mb-3 text-lg md:text-xl font-semibold" style={{ color: '#666666' }}>
                      <strong>Regular Price: $69.95 | Today: Free</strong>
                    </h6>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                      Mitolyn customers who order 3 or 6 bottle packages receive this comprehensive 1-Day Kickstart Detox guide at no additional cost. Mitolyn's detox protocol helps prepare your body for optimal supplement absorption by cleansing and flushing your organs. Mitolyn's guide includes 20 simple 15-second detox tea recipes using everyday ingredients from your kitchen, designed to enhance your Mitolyn journey from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwp5LO3gdh py-12 bg-white" id="team2-8c">
        <div className="container mx-auto px-4" style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '85%' }}>
          <div className="item features-image bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="item-wrapper">
              <div className="row align-items-center flex flex-col md:flex-row gap-6">
                <div className="col-12 col-md-5">
                  <div className="image-wrapper">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-bonus-2.webp?updatedAt=1765361274887" 
                      alt="Mitolyn bonus 2" 
                      width={600} 
                      height={600}
                      className="w-full h-auto rounded-lg shadow-xl"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '400px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md flex-1">
                  <div className="card-box">
                    <h5 className="card-title mb-3 text-2xl md:text-3xl font-bold" style={{ color: '#e6502b' }}>
                      <strong>BONUS #2: Renew You</strong>
                    </h5>
                    <h6 className="card-subtitle mb-3 text-lg md:text-xl font-semibold" style={{ color: '#666666' }}>
                      <strong>Regular Price: $59.95 | Today: Free</strong>
                    </h6>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                      Mitolyn includes the Renew You guide as your second complimentary bonus, focusing on mental wellness and mindset transformation. Mitolyn recognizes that physical transformation requires mental alignment, which is why this guide provides simple methods to instantly relieve stress, calm your mind, boost confidence, and reduce anxiety. Mitolyn's holistic approach ensures you achieve both physical and mental renewal as you progress on your wellness journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

