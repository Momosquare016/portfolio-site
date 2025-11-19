export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          Resume
        </h1>

        {/* Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/Muhammad_Ali_Resume.pdf"
            download="Muhammad_Ali_Resume.pdf"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 text-lg"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Image */}
        <div className="bg-gray-900/50 border border-blue-900/50 rounded-lg overflow-hidden shadow-2xl p-4 md:p-8">
          <img
            src="/resume-preview.png"
            alt="Muhammad Ali Resume"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
