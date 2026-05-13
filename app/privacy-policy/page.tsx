import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbfb] text-ink">
      <Header />
      
      {/* Page Title Section */}
      <div className="w-full bg-brand py-12 md:py-16 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-4xl md:text-[56px] font-serif text-white font-medium mb-2 tracking-tight">Privacy Policy</h1>
          <p className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase">Home / Privacy Policy</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-20 px-6">
        <div className="max-w-[1000px] mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-[15px] md:text-[17px] leading-relaxed text-gray-600 mb-12 font-light">
            We at <strong className="text-black font-medium">Eldeco Latitude 27</strong> are firmly committed towards respecting and safeguarding your privacy to the best of our abilities and with the help of the latest available technology. And it is for this reason that, we have formulated and mentioned below our Privacy Policies or Privacy Protection Measures. We would also like to bring to your knowledge that we consider your trust in us, our biggest asset and hence we are ready to go for an extra mile to keep your trust intact. Thus safeguarding your trust is our top-most priority.
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-black mb-8 font-medium">Below mentioned are our Privacy Policies</h3>

          <ul className="flex flex-col gap-6 text-[15px] md:text-[17px] text-gray-600 font-light list-none">
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-brand shrink-0" />
              <span>We will collect from you, only those information which are mandatory for us to provide you best-quality services.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-brand shrink-0" />
              <span>Only the most trustworthy and specialized professionals from <strong className="text-black font-medium">Eldeco Latitude 27</strong> will be allowed to access your personal information.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-brand shrink-0" />
              <span>In no circumstances and at no cost, your personal information will be shared with any third-party organization without your prior written approval.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-brand shrink-0" />
              <span>We will strictly and constantly monitor the safety of your information with us, with the help of latest technology.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
