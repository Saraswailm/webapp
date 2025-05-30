import React from 'react';
import { Shield, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fishix</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're on a mission to make the web safer for everyone. Our advanced threat detection 
              technology helps users identify and avoid malicious websites.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-neutral-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-400 mb-6">
                  In today's digital landscape, cybersecurity threats are evolving at an alarming rate. 
                  Phishing, malware, and scam websites are becoming increasingly sophisticated, making 
                  it harder for users to identify and avoid them.
                </p>
                <p className="text-gray-400">
                  At Fishix, we believe everyone deserves to browse the internet safely. Our mission is 
                  to empower users with the tools and knowledge they need to protect themselves online.
                  Through our advanced URL scanning technology and educational resources, we're building 
                  a safer internet for all.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-black rounded-lg p-8">
                <Shield className="h-24 w-24 text-red-500 mx-auto mb-6" />
                <p className="text-xl font-medium text-center italic">
                  "Creating a safer internet by empowering users to identify and avoid online threats."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">
              These principles guide our work and help us deliver the best possible protection for our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-10 w-10 text-red-500" />,
                title: "Security First",
                description: "We prioritize your online safety above all else, constantly improving our detection systems."
              },
              {
                icon: <Users className="h-10 w-10 text-red-500" />,
                title: "User Privacy",
                description: "We respect your privacy and only collect the data necessary to protect you."
              },
              {
                icon: <Target className="h-10 w-10 text-red-500" />,
                title: "Accuracy",
                description: "We strive for the highest possible accuracy in threat detection to avoid false positives."
              },
              {
                icon: <Zap className="h-10 w-10 text-red-500" />,
                title: "Speed",
                description: "We deliver instant security assessments so you can browse with confidence."
              }
            ].map((value, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-neutral-800 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
          </div>
       
  );
};

export default About;