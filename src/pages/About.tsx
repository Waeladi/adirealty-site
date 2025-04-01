
import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/hero";
import SectionHeader from "@/components/ui/section-header";
import CTASection from "@/components/ui/cta-section";

const About = () => {
  return (
    <Layout>
      <Hero
        title="About ADI Realty"
        subtitle="Denver's boutique real estate consultancy firm"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Our Story" 
              centered
            />
            <div className="prose max-w-full">
              <p className="text-denver-700 mb-6">
                ADI Realty was founded with a simple yet powerful vision: to provide personalized, expert real estate consultancy services in Denver, Colorado. Unlike large real estate corporations, we intentionally maintain a selective client base to ensure each client receives the dedicated attention and tailored solutions they deserve.
              </p>
              <p className="text-denver-700 mb-6">
                Our boutique approach allows us to focus deeply on each client's unique needs, developing customized strategies whether you're seeking advice on property investments, management solutions, or rental services. With years of experience in the Denver real estate market, our team brings local expertise and industry knowledge to every consultation.
              </p>
              <p className="text-denver-700">
                At ADI Realty, we believe in building lasting relationships with our clients based on trust, transparency, and results. We're not just consultants; we're partners in your real estate journey, committed to helping you achieve your property goals in the Denver metropolitan area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our approach to real estate consultancy"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Integrity</h3>
              <p className="text-denver-600">
                We maintain the highest ethical standards in all our business practices, providing honest advice that puts your interests first.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Expertise</h3>
              <p className="text-denver-600">
                Our team continuously develops their knowledge and skills to deliver informed, up-to-date guidance on the Denver real estate market.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Personalization</h3>
              <p className="text-denver-600">
                We recognize that each client's needs are unique, and we tailor our services to align with your specific goals and circumstances.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Transparency</h3>
              <p className="text-denver-600">
                We believe in clear communication and keeping you informed throughout the entire consultation process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Community</h3>
              <p className="text-denver-600">
                As Denver locals, we're invested in the community and committed to contributing to its growth and prosperity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-denver-800 mb-4">Results</h3>
              <p className="text-denver-600">
                We measure our success by the results we achieve for our clients and the value we add to their real estate endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=700&q=80" 
                alt="Denver real estate" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-denver-900 mb-4">
                Our Approach
              </h2>
              <p className="text-denver-700 mb-6">
                At ADI Realty, we take a consultative approach to real estate. Rather than pushing for quick transactions, we focus on understanding your long-term goals and providing strategic advice to help you make informed decisions.
              </p>
              <p className="text-denver-700 mb-6">
                Our consulting process involves thorough assessment, research, and analysis, followed by clear recommendations tailored to your specific situation. Whether you're exploring rental property opportunities, seeking property management guidance, or need expert real estate advice, we provide insights based on market trends and years of industry experience.
              </p>
              <p className="text-denver-700">
                By intentionally maintaining a selective client base, we ensure that each client receives the attention, expertise, and personalized service they deserve. This boutique approach allows us to build meaningful relationships and deliver truly customized real estate solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Our Personalized Approach"
        description="Schedule a consultation to discuss your real estate needs with our expert team."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default About;
