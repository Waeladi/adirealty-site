
import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/hero";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/ui/service-card";
import CTASection from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Map } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80"
        title="Denver's Premier Real Estate Consultants"
        subtitle="Personalized real estate consulting services with deep local knowledge and expertise"
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-adi-600 hover:bg-adi-700">
            <a href="/contact">Get a Consultation</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <a href="/services">Our Services</a>
          </Button>
        </div>
      </Hero>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-denver-900 mb-4">
                Boutique Real Estate Consultancy in Denver
              </h2>
              <p className="text-denver-700 mb-6">
                At ADI Realty, we take pride in offering personalized real estate consultancy services tailored to your specific needs. Our boutique approach ensures that you receive dedicated attention and expert guidance throughout your real estate journey.
              </p>
              <p className="text-denver-700 mb-6">
                Whether you're looking for advice on property investments, management solutions, or rental services in the Denver area, our team of experienced consultants is here to help you make informed decisions.
              </p>
              <Button asChild className="bg-adi-600 hover:bg-adi-700">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80" 
                alt="ADI Realty Consultancy" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive real estate solutions tailored to your specific needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Building size={36} />}
              title="Real Estate Consultancy"
              description="Expert guidance on real estate investments, market trends, and property valuation in the Denver metropolitan area."
            />
            <ServiceCard
              icon={<MapPin size={36} />}
              title="Property Management"
              description="Professional property management consultation services for landlords, ensuring optimal performance of your real estate assets."
            />
            <ServiceCard
              icon={<Map size={36} />}
              title="Rental Services"
              description="Specialized advice on rental properties, tenant management, and maximizing rental income in Denver's competitive market."
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-adi-600 hover:bg-adi-700">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose ADI Realty"
            subtitle="The benefits of working with our boutique real estate consultancy"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Local Expertise</h3>
              <p className="text-denver-600">
                Deep understanding of Denver's real estate market, neighborhoods, and property values.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Personalized Service</h3>
              <p className="text-denver-600">
                Tailored solutions designed to meet your specific real estate goals and requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Trusted Advisors</h3>
              <p className="text-denver-600">
                Straightforward, honest advice focused on your best interests and long-term success.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Professional Network</h3>
              <p className="text-denver-600">
                Access to our extensive network of real estate professionals, contractors, and service providers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Transparent Process</h3>
              <p className="text-denver-600">
                Clear communication and transparency throughout every step of your real estate journey.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-3">Results-Driven</h3>
              <p className="text-denver-600">
                Focused on achieving concrete results that align with your property goals and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Real Estate Experience?"
        description="Schedule a consultation with our experienced team to discuss your property needs and goals."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </Layout>
  );
};

export default Index;
