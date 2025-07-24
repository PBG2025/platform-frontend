export default function Features() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">🔍 Searchable Knowledge Library</h3>
          <p>Access structured, AI-enhanced content on all aspects of the petroleum industry.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🤖 AI-Powered Technical Support</h3>
          <p>Ask technical questions and receive multilingual, expert-level AI-generated answers.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🌍 Global Expert Directory</h3>
          <p>Connect with vetted professionals for consulting, training, or research collaborations.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🌐 Multilingual Platform</h3>
          <p>Ask and receive answers in your own language using intelligent translation pipelines.</p>
        </div>
      </div>
    </section>
  );
}

