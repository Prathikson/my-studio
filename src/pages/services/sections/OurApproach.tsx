import React from 'react';

const OurApproach: React.FC = () => {
  return (
    <div className="w-full bg-lightGray py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column - Title and Description */}
          <div className="flex flex-col">
            <h2 className="text-6xl lg:text-8xl font-bold text-carbonBlack mb-8 leading-none">
              Our<br />
              Approach
            </h2>
            <p className="text-carbonGray text-lg leading-relaxed">
              Design is a process, not just a product. We take a collaborative, research-driven 
              approach to create work that is both visually powerful and functionally effective. 
              Here's how we do it:
            </p>
          </div>

          {/* Right Column - Process Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 ">
            {/* Discovery & Strategy */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-carbonBlack leading-tight">
                
                Discovery &<br />
                Strategy
              </h3>
              <p className="text-smoothBlack leading-relaxed text-base">
                Understanding your brand, audience, 
                and goals to create a strong 
                foundation.
              </p>
            </div>

            {/* Concept & Design */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-carbonBlack leading-tight">
                Concept &<br />
                Design
              </h3>
              <p className="text-smoothBlack leading-relaxed text-base">
                Translating insights into striking 
                visuals and cohesive brand identities.
              </p>
            </div>

            {/* Execution & Development */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-carbonBlack leading-tight">
                Execution &<br />
                Development
              </h3>
              <p className="text-smoothBlack leading-relaxed text-base">
                Bringing designs to life with seamless 
                digital experiences and high-performance builds.
              </p>
            </div>

            {/* Iteration & Refinement */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-carbonBlack leading-tight">
                Iteration &<br />
                Refinement
              </h3>
              <p className="text-smoothBlack leading-relaxed text-base">
                Ensuring every project is fine-tuned 
                for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;