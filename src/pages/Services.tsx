import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/hero";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/ui/service-card";
import CTASection from "@/components/ui/cta-section";
import { Building, MapPin, Map } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive real estate consultancy tailored to your needs"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white" id="consultancy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-denver-900 mb-4">
                Real Estate Consultancy
              </h2>
              <p className="text-denver-700 mb-6">
                Our core service revolves around providing expert real estate consultation to clients in the Denver area. We offer strategic guidance based on deep market knowledge and years of industry experience.
              </p>
              <h3 className="text-xl font-semibold text-denver-800 mb-2">
                Our consultancy services include:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-denver-700">
                <li>Investment property analysis and recommendations</li>
                <li>Market trend evaluation and forecasting</li>
                <li>Property valuation and pricing strategies</li>
                <li>Denver neighborhood insights and guidance</li>
                <li>Real estate portfolio review and optimization</li>
                <li>Buy vs. rent analysis for residential properties</li>
              </ul>
              <p className="text-denver-700">
                Whether you're a first-time investor, seasoned property owner, or someone looking to make informed real estate decisions, our consultancy services provide the insights and direction you need.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=700&q=80" 
                alt="Real Estate Consultancy" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="property-management">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-denver-900 mb-4">
                Property Management Consultancy
              </h2>
              <p className="text-denver-700 mb-6">
                Effective property management is crucial for maximizing your real estate investment returns. Our property management consultancy services help landlords and property owners optimize their operations and enhance property value.
              </p>
              <h3 className="text-xl font-semibold text-denver-800 mb-2">
                Our property management consultancy includes:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-denver-700">
                <li>Rental property performance assessment</li>
                <li>Property management strategy development</li>
                <li>Tenant acquisition and retention planning</li>
                <li>Maintenance and property preservation guidance</li>
                <li>Management process optimization</li>
                <li>Landlord best practices and compliance advice</li>
              </ul>
              <p className="text-denver-700">
                Our consultancy focuses on helping you create efficient systems, make informed decisions, and implement strategies that lead to successful property management outcomes in the Denver market.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80" 
                alt="Property Management Consultancy" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="rentals">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-denver-900 mb-4">
                Rental Services Consultancy
              </h2>
              <p className="text-denver-700 mb-6">
                Our rental services consultancy specializes in helping property owners navigate the Denver rental market. We provide expert guidance on optimizing rental properties for maximum return and minimal hassle.
              </p>
              <h3 className="text-xl font-semibold text-denver-800 mb-2">
                Our rental consultancy services include:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-denver-700">
                <li>Rental market analysis and pricing strategies</li>
                <li>Property preparation recommendations for rental</li>
                <li>Tenant screening process development</li>
                <li>Lease agreement structure and terms guidance</li>
                <li>Rental property marketing strategies</li>
                <li>Income optimization for rental properties</li>
              </ul>
              <p className="text-denver-700">
                Whether you're considering renting your property or looking to improve your current rental operation, our consultants provide tailored advice to help you succeed in Denver's competitive rental market.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=700&q=80" 
                alt="Rental Services Consultancy" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Additional Services"
            subtitle="Complementary real estate consultancy offerings"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={<Building size={36} />}
              title="Investment Analysis"
              description="Detailed analysis of potential real estate investments in the Denver area, including ROI projections and risk assessment."
            />
            <ServiceCard
              icon={<MapPin size={36} />}
              title="Market Research"
              description="Comprehensive research on Denver neighborhoods, market trends, and property values to inform your real estate decisions."
            />
            <ServiceCard
              icon={<Map size={36} />}
              title="Strategy Development"
              description="Customized real estate strategies aligned with your financial goals, timeline, and risk tolerance."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Schedule a consultation to discuss how our services can help with your real estate needs."
        buttonText="Request Consultation"
        buttonLink="/contact"
        secondaryButtonText="Learn More About Us"
        secondaryButtonLink="/about"
      />
    </Layout>
  );
};

export default Services;
