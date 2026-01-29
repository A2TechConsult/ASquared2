import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Shield, Lock, FileCheck, Search, Globe, Scale, Database, Clock, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8">
              Privacy & Security
            </h1>
            <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              We keep your data private, safe, and secure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="px-6 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Security */}
            <a href="#security" className="block p-8 bg-white hover:bg-gray-50 transition-colors duration-300 group">
              <Shield className="w-10 h-10 text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-light text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Organizational Security · Data Encryption · Application Security · Vulnerability Assessments
              </p>
            </a>

            {/* Privacy */}
            <a href="#privacy" className="block p-8 bg-white hover:bg-gray-50 transition-colors duration-300 group">
              <Lock className="w-10 h-10 text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-light text-gray-900 mb-2">Privacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Global Data Privacy · GDPR · Data Processing · Data Transfer · Storage & Requests
              </p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section id="security" className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-12 tracking-tight">Security</h2>
            
            <div className="space-y-16">
              {/* Intro */}
              <div className="pb-12 border-b border-gray-100">
                <p className="text-2xl font-light text-gray-900 mb-6">
                  At ASquared Technologies, we are committed to keeping our customers' data secure
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We employ rigorous security measures at the organizational, architectural, and operational levels to ensure that your data, applications, and infrastructure remain safe.
                </p>
              </div>

              {/* Organizational Security */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Organizational Security</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      All ASquared Technologies employees receive security, privacy, and compliance training on their first day of employment. Though the extent of involvement may vary by role, security is everybody's responsibility at ASquared Technologies. This commitment to security extends to our executives. The ASquared Technologies Security Council, a cross-functional group of executives spanning the enterprise, shapes our security programs, drives executive alignment across our organization, and ensures that security awareness and initiatives permeate throughout our organization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Encryption */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Data Encryption</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      ASquared Technologies encrypts sensitive customer data before it's persisted in a database. We use the Advanced Encryption Standard (AES) algorithm with a key size of 256 bits. Transport Layer Security (TLS) protects user access via the internet, helping to secure network traffic from passive eavesdropping, active tampering, or message forgery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Application Security */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Application Security</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      ASquared Technologies has implemented an enterprise Secure Software Development Life Cycle (SDLC) to help ensure the continued security of ASquared Technologies applications. This program includes an in-depth security risk assessment and review of ASquared Technologies features, as well as both static and dynamic source code analyses, all of which are performed to help integrate enterprise security into the development lifecycle. The development process is further enhanced by application security training for developers and penetration testing of the application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vulnerability Assessments */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Vulnerability Assessments</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      ASquared Technologies contracts with third-party expert firms to conduct independent internal and external network, system, and application vulnerability assessments.
                    </p>

                    {/* Application Assessment */}
                    <div className="bg-gray-50 p-8 mb-6">
                      <h4 className="text-xl font-light text-gray-900 mb-3">Application</h4>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">
                        We contract with a leading third-party security firm to perform an application-level security vulnerability assessment of our web application annually. The firm performs testing procedures to identify standard and advanced web application security vulnerabilities, for example:
                      </p>
                      <ul className="space-y-2 text-base text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Security weaknesses associated with Cross-site request forgery (CSRF)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Improper input handling (such as cross-site scripting, SQL injection, XML injection, and cross-site flashing)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Weak-session management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Data validation flaws and data model constraint inconsistencies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Insufficient authentication or authorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>HTTP response splitting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Misuse of SSL/TLS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Use of unsafe HTTP methods</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Misuse of cryptography</span>
                        </li>
                      </ul>
                    </div>

                    {/* Network Assessment */}
                    <div className="bg-gray-50 p-8">
                      <h4 className="text-xl font-light text-gray-900 mb-3">Network</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        External vulnerability assessments scan all internet-facing assets (including: firewalls, routers, and web servers) for potential weaknesses that could allow unauthorized access to the network. An authenticated internal vulnerability network and system assessment is performed to identify potential weaknesses and inconsistencies with general system security policies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section id="privacy" className="px-6 py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-12 tracking-tight">Privacy</h2>
            
            <div className="space-y-16">
              {/* Global Data Privacy */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Global Data Privacy</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      ASquared Technologies demonstrates compliance with international privacy regulations by maintaining a comprehensive global data protection program that contains technical and organizational safeguards designed to prevent unauthorized access to and use or disclosure of customer data.
                    </p>
                  </div>
                </div>
              </div>

              {/* GDPR */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">General Data Protection Regulation (GDPR)</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      On May 25, 2018, the GDPR significantly changed the European data privacy landscape. The GDPR harmonized the patchwork of data protection laws in Europe. ASquared Technologies is confident that we can process our customers' personal data in alignment with the GDPR.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Some highlights of how ASquared Technologies' robust privacy and security practices support GDPR compliance include:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>Recurring role-based employee training on security and privacy practices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>Well-developed processes to capture Privacy Impact Assessments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>Offering data transfer mechanisms to legalize transfers of personal data outside of the European Economic Area</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>Maintaining records of processing activities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>Privacy by Design and Privacy by Default is integrated deeply into all ASquared Technologies Services</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-600 leading-relaxed mt-6">
                      ASquared Technologies continues to monitor guidance that EU supervisory authorities issue to ensure that our compliance program remains up-to-date.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Processing Relationship */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Data Processing Relationship</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our customers serve as the data controller while ASquared Technologies is the data processor. This means that you have full control of the data entered into services, as well as all setup and configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Purpose for Data Processing */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Purpose for Data Processing</h3>
                    
                    <div className="space-y-6">
                      {/* Contractual Obligations */}
                      <div>
                        <h4 className="text-xl font-light text-gray-900 mb-3">For fulfillment of contractual obligations (Art. 6 para. 1b of the GDPR)</h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Data is processed in order to provide and receive services in the context of carrying out our contracts with our clients and suppliers or to carry out pre-contractual measures that occur as part of a request. The purposes of data processing are primarily in compliance with the specific services provided or received. You can find more specific details about the purposes of data processing in the relevant contract documents and terms and conditions.
                        </p>
                      </div>

                      {/* Balancing Interests */}
                      <div>
                        <h4 className="text-xl font-light text-gray-900 mb-3">In the context of balancing interests (Art. 6 para. 1f of the GDPR)</h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                          Where required, we process your data beyond the actual fulfillment of the contract for the purposes of the legitimate interests pursued by us or a third party. Examples include:
                        </p>
                        <ul className="space-y-2 text-base text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Reviewing and optimizing procedures for needs assessment for the purpose of direct customer discussions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Asserting legal claims and defense in legal disputes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Guarantee of our company's IT security and IT operation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Prevention and clarification of crimes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Measures for site security (e.g. access controls)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Measures for business management and further development of services and products</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Risk control</span>
                          </li>
                        </ul>
                        <p className="text-base text-gray-600 leading-relaxed mt-4">
                          We also obtain personal data from publicly available sources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Transfer Mechanisms */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Data Transfer Mechanisms</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      ASquared Technologies offers customers that operate inside of the European Union with GDPR compliant data transfer mechanisms. ASquared Technologies' Data Processing Agreement (DPA) includes the European Commission's Standard Contractual Clauses (SCC), which enable the transfer of personal data from the European Economic Area to the United States.
                    </p>
                  </div>
                </div>
              </div>

              {/* How Long Will Your Data Be Stored */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">How Long Will Your Data Be Stored?</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      We will process and store your personal data for as long as it is necessary in order to fulfill our contractual and statutory obligations. It should be noted here that our business relationship is a long-term obligation, which is set up on the basis of periods of years.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      If the data is no longer required in order to fulfill contractual or statutory obligations, it is deleted, unless its further processing is required – for a limited time – for fulfilling obligations to preserve records according to commercial and tax law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Subject Request */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Data Subject Request</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      You can make a GDPR data request by contacting us directly.
                    </p>
                    <Link
                      to="/gdpr-request"
                      className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      Submit a Request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light text-gray-900 mb-6">Questions about our privacy practices?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              For questions or concerns about this Privacy Policy or our data practices, please contact us.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}