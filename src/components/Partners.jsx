export default function Partners() {
  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
      <p className="text-lg mb-6">
        We are proud to partner with leading insurance providers and hospitals in Kenya
        to ensure accessible, trusted, and quality healthcare.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
        {/* Replace src with actual logos later */}
        <img src="https://upload.wikimedia.org/wikipedia/en/2/28/AAR_Healthcare_logo.png" alt="AAR" className="h-16 mx-auto object-contain" />
        <img src="https://seeklogo.com/images/B/britam-logo-61A4A42D2A-seeklogo.com.png" alt="Britam" className="h-16 mx-auto object-contain" />
        <img src="https://seeklogo.com/images/U/uap-old-mutual-logo-45EC39F7D4-seeklogo.com.png" alt="UAP" className="h-16 mx-auto object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Aga_Khan_University_Logo.svg/512px-Aga_Khan_University_Logo.svg.png" alt="Aga Khan" className="h-16 mx-auto object-contain" />
        <img src="https://via.placeholder.com/150x50?text=Diani+Beach+Hospital" alt="Diani Beach Hospital" className="h-16 mx-auto object-contain" />
        <img src="https://via.placeholder.com/150x50?text=Pandya+Hospital" alt="Pandya Hospital" className="h-16 mx-auto object-contain" />
      </div>
      <button className="bg-white/80 text-neutral-900 hover:bg-white px-6 py-2 rounded-xl shadow-md">
        Work With Us
      </button>
    </section>
  );
}