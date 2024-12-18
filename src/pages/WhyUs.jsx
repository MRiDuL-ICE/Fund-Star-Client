import React from "react";

const WhyUs = () => {
  return (
    <div>
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#6330F6]">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              <strong className="text-[#6330F6]">Fund Star</strong> empowers your crowdfunding journey with
              unmatched features, tools, and community support to ensure your
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 bg-[#6330F6] p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3-.5 3-2-1.5-2-3-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.5 12c0-4.485-2.243-7.5-7.5-7.5s-7.5 3.015-7.5 7.5c0 4.485 2.243 7.5 7.5 7.5s7.5-3.015 7.5-7.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6330F6]">Low Fees</h3>
                  <p className="">
                    Keep more of your funding with industry-leading low fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 bg-[#6330F6] p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h3v11H3V10zM9 21h3V10H9v11zm6 0h3V10h-3v11zm6 0h3V10h-3v11z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6330F6]">
                    High Success Rate
                  </h3>
                  <p className="">
                    Campaigns on our platform see a 20% higher success rate on
                    average.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-[#6330F6] p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.5 15H5.25a.75.75 0 000 1.5h5.586a.75.75 0 01.53.22l2.72 2.72V6.06A5.06 5.06 0 008.5 11h-5v1.5h5v1.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6330F6]">
                    Support Tools
                  </h3>
                  <p className="">
                    Access powerful tools and resources to boost your campaign’s
                    reach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-base-100 rounded-lg shadow-md p-6">
              <table className="w-full border-collapse">
                <thead className="">
                  <tr className="bg-[#6330F6] text-white w-full">
                    <th className="py-3 px-4 text-left">Feature</th>
                    <th className="py-3 px-4 text-left">Fund Star</th>
                    <th className="py-3 px-4 text-left">Others</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-t">
                    <td className="py-3 px-4">Platform Fees</td>
                    <td className="py-3 px-4">2%</td>
                    <td className="py-3 px-4">5%+</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Success Rate</td>
                    <td className="py-3 px-4">85%</td>
                    <td className="py-3 px-4">65%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Support Tools</td>
                    <td className="py-3 px-4">Included</td>
                    <td className="py-3 px-4">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
