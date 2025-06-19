import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ThumbsUp, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      condition: 'Cardiac Surgery Patient',
      rating: 5,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'The cardiac team at BigMedix saved my life. From the initial consultation to post-surgery care, every step was handled with incredible professionalism and compassion. I cannot thank Dr. Johnson and her team enough.',
      date: '2 weeks ago',
      treatment: 'Heart Surgery'
    },
    {
      name: 'David Thompson',
      condition: 'Orthopedic Surgery Patient',
      rating: 5,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'After my knee replacement surgery with Dr. Wilson, I\'m back to playing tennis again! The entire process was smooth, and the rehabilitation team helped me recover faster than I ever expected.',
      date: '1 month ago',
      treatment: 'Knee Replacement'
    },
    {
      name: 'Maria Rodriguez',
      condition: 'Pediatric Care Parent',
      rating: 5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'Dr. Davis has been our family pediatrician for 3 years. She\'s amazing with children and always takes the time to address all our concerns. The staff is friendly and the facility is always clean and welcoming.',
      date: '3 weeks ago',
      treatment: 'Pediatric Care'
    },
    {
      name: 'Robert Kim',
      condition: 'Neurology Patient',
      rating: 5,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'Dr. Chen\'s expertise in neurology is exceptional. He diagnosed my condition quickly and developed a treatment plan that has significantly improved my quality of life. The entire neurology team is outstanding.',
      date: '2 months ago',
      treatment: 'Neurological Treatment'
    },
    {
      name: 'Lisa Anderson',
      condition: 'Emergency Care Patient',
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'When I had a medical emergency at 2 AM, the BigMedix emergency team was incredible. They were fast, professional, and provided excellent care during a very scary time for my family.',
      date: '1 week ago',
      treatment: 'Emergency Care'
    },
    {
      name: 'Michael Brown',
      condition: 'Preventive Care Patient',
      rating: 5,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      testimonial: 'The preventive care program helped me identify health risks early. The comprehensive screening and personalized wellness plan have made a huge difference in my overall health and energy levels.',
      date: '1 month ago',
      treatment: 'Preventive Care'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-[#F4F8F6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="bg-[#F26C45] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Patient Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4C4C] mb-6 leading-tight">
            What Our Patients
            <span className="text-[#F26C45] block">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our patients have to say about their experience with BigMedix.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="testimonial-carousel">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <div
                        key={index}
                        className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center mb-6">
                          <Quote className="text-[#F26C45] group-hover:text-[#e55a3a] transition-colors" size={32} />
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-6 italic group-hover:text-gray-800 transition-colors">
                          "{testimonial.testimonial}"
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <img
                                src={testimonial.image}
                                alt={`${testimonial.name} - satisfied patient`}
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#F26C45]/20 group-hover:border-[#F26C45]/40 transition-colors"
                              />
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                <Heart size={12} className="text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold text-[#1E4C4C] group-hover:text-[#F26C45] transition-colors">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                {testimonial.condition}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                                {testimonial.date}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="bg-[#F26C45]/10 text-[#F26C45] px-3 py-1 rounded-full text-xs font-medium">
                            {testimonial.treatment}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-500 group-hover:text-gray-600 transition-colors">
                            <ThumbsUp size={16} />
                            <span className="text-sm">Verified Patient</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E4C4C] hover:text-[#F26C45] hover:bg-[#F4F8F6] transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#F26C45] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1E4C4C] mb-2">4.9</div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1E4C4C] mb-2">1,247</div>
              <div className="text-gray-600">Patient Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1E4C4C] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1E4C4C] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;