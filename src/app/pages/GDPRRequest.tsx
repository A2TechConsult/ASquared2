import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield, Check } from 'lucide-react';

export function GDPRRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinUrl: '',
    requestType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('GDPR Request:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        linkedinUrl: '',
        requestType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-4">Request Submitted</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Thank you for your GDPR data request. We will process your request and respond within 30 days as required by GDPR regulations.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              GDPR Data Request
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Make a request for a copy of your data, to have your data modified, or to have your data removed from ASquared Technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-3">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-base text-gray-900 placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-base text-gray-900 placeholder-gray-400"
                placeholder="your.email@company.com"
              />
            </div>

            {/* LinkedIn Profile URL */}
            <div>
              <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-3">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-base text-gray-900 placeholder-gray-400"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            {/* Request Type */}
            <div>
              <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-3">
                What type of GDPR request are you making?
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-base text-gray-900 bg-white"
              >
                <option value="">Select a request type</option>
                <option value="copy">I'd like a copy of my data</option>
                <option value="modification">I'd like to make a modification to my data</option>
                <option value="removal">I'd like my data removed from ASquared Technologies</option>
              </select>
            </div>

            {/* Message (Optional) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-4 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-base text-gray-900 placeholder-gray-400 resize-none"
                placeholder="Additional details about your request..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Submit Request
              </button>
            </div>

            {/* Legal Notice */}
            <div className="pt-4 pb-8">
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                We will process your request in accordance with GDPR requirements and respond within 30 days. 
                For more information, please review our{' '}
                <a href="/privacy" className="text-gray-900 underline hover:no-underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Information Section */}
      <section className="px-6 py-20 bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Your Rights Under GDPR</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Right to Access */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Right to Access</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Request a copy of all personal data we hold about you
                </p>
              </div>

              {/* Right to Rectification */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Right to Rectification</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Request corrections to inaccurate or incomplete data
                </p>
              </div>

              {/* Right to Erasure */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Right to Erasure</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Request deletion of your personal data from our systems
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Response Time:</strong> We will acknowledge your request within 72 hours and provide a full response within 30 days as required by GDPR Article 12. If your request is complex, we may extend this period by a further 60 days and will inform you of such extension.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
