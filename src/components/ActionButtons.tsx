
import React from 'react';

const ActionButtons = () => {
  return (
    <section id="appointment" className="py-20 bg-clinic-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-accent mb-4">
            Ready to Improve Your Hearing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Book an appointment today or contact us for more information about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+123456789" 
              className="button-primary bg-clinic-primary"
            >
              Call Now
            </a>
            <a 
              href="#contact" 
              className="button-primary bg-white text-clinic-primary border border-clinic-primary hover:bg-clinic-primary hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;
