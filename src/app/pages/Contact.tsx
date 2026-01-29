import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Phone, Building2, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    context: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    company: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: '',
      company: '',
    };

    if (!formData.email) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company) {
      newErrors.company = 'This field is required';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.company) {
      setIsSubmitted(true);
      // In a real application, this would submit to a backend
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
              <CheckCircle2 className="size-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Message sent</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We'll review your inquiry and respond within one business day.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Let's discuss your<br />requirements.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Share your SAP challenge. We'll respond within one business day with relevant expertise and availability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Premium Layout */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <motion.form		
		name="contact"
  		method="POST"
  		data-netlify="true"
  		netlify-honeypot="bot-field"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 p-12 md:p-16"
          >
<input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
            <div className="space-y-10">
              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-4"
                >
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-0 py-4 border-0 border-b-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:border-gray-900 transition-colors text-lg font-light bg-transparent placeholder:text-gray-400`}
                  placeholder="your.name@company.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-red-600"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Company Field */}
              <div className="group">
                <label
                  htmlFor="company"
                  className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-4"
                >
                  Company name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-0 py-4 border-0 border-b-2 ${
                    errors.company ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:border-gray-900 transition-colors text-lg font-light bg-transparent placeholder:text-gray-400`}
                  placeholder="Your organization"
                />
                {errors.company && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-red-600"
                  >
                    {errors.company}
                  </motion.p>
                )}
              </div>

              {/* Context Field */}
              <div className="group">
                <label
                  htmlFor="context"
                  className="block text-xs font-medium uppercase tracking-widest text-gray-500 mb-4"
                >
                  Brief context <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="context"
                  name="context"
                  value={formData.context}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none text-lg font-light bg-transparent placeholder:text-gray-400 leading-relaxed"
                  placeholder="Tell us about your requirements"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium tracking-wide hover:shadow-lg hover:scale-[1.02]"
                >
                  Send request
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Office Locations - Modern Card Grid */}
      <section className="px-6 mb-32 bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Our locations</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Global presence with local expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hyderabad Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-gray-300 p-10 h-full transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="size-8 text-gray-900" />
                  <h3 className="text-2xl font-light text-gray-900 tracking-tight">Hyderabad</h3>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="size-4 text-gray-400" />
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Address
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed pl-6">
                      ASQUARED TECHNOLOGIES (INDIA) PRIVATE LIMITED<br />
                      Plot No 226, Mythri Nagar, Tirumalagiri<br />
                      Hyderabad, Telangana - 500049
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="size-4 text-gray-400" />
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Email
                      </div>
                    </div>
                    <a 
                      href="mailto:admin@a2techconsult.com" 
                      className="text-gray-600 hover:text-gray-900 transition-colors pl-6 inline-block"
                    >
                      admin@a2techconsult.com
                    </a>
                  </div>

                  {/* Company Details */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">CIN</span>
                      <span className="text-gray-900 font-medium">U62091TS2025PTC194597</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">GST No</span>
                      <span className="text-gray-900 font-medium">36ABCCA3060C1Z9</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* USA Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-gray-300 p-10 h-full transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="size-8 text-gray-900" />
                  <h3 className="text-2xl font-light text-gray-900 tracking-tight">USA</h3>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="size-4 text-gray-400" />
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Address
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed pl-6">
                      1631 N Terracina Dr<br />
                      Dublin, CA 94568<br />
                      United States
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="size-4 text-gray-400" />
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Email
                      </div>
                    </div>
                    <div className="space-y-2 pl-6">
                      <div>
                        <a 
                          href="mailto:hr@blueaquaintegrators.com" 
                          className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                        >
                          hr@blueaquaintegrators.com
                        </a>
                      </div>
                      <div>
                        <a 
                          href="mailto:sales@blueaquaintegrators.com" 
                          className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                        >
                          sales@blueaquaintegrators.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="size-4 text-gray-400" />
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Phone
                      </div>
                    </div>
                    <a 
                      href="tel:+14084993596" 
                      className="text-gray-600 hover:text-gray-900 transition-colors pl-6 inline-block"
                    >
                      +1 (408) 499-3596
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              We typically respond to inquiries within one business day
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
