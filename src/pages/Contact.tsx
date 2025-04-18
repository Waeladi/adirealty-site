import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Reach out to discuss your real estate consulting needs"
        backgroundImage="https://images.unsplash.com/photo-1560518883-f5f8c4af32fc?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-denver-900 mb-6">Get In Touch</h2>
              <p className="text-denver-700 mb-8">
                We'd love to hear from you. Whether you have a question about our services, need advice on a property, or want to schedule a consultation, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-adi-100 p-3 rounded-full text-adi-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-denver-800 mb-1">Location</h3>
                    <p className="text-denver-600">Denver, Colorado</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-adi-100 p-3 rounded-full text-adi-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-denver-800 mb-1">Email</h3>
                    <a href="mailto:info@adirealty.com" className="text-denver-600 hover:text-adi-600 transition-colors">
                      info@adirealty.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-denver-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-denver-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-denver-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-denver-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-denver-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-denver-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-adi-600 hover:bg-adi-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-denver-900 mb-8">Serving the Denver Metropolitan Area</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-denver-700 mb-8">
              ADI Realty provides real estate consulting services throughout Denver and the surrounding communities. 
              Our extensive knowledge of Denver's neighborhoods allows us to offer expert advice tailored to each area's unique characteristics.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Downtown Denver</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Cherry Creek</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Highland</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">RiNo</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Washington Park</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Park Hill</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Stapleton</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-medium text-denver-800">Lakewood</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
