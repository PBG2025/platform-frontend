export default function Features() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">🔍 AI-Powered Knowledge Engine</h3>
          <p>
            Access structured, continuously updated, AI-enhanced content from papers, reports, and technical documents — across upstream, midstream, and downstream sectors.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🤖 Smart Q&A Assistant</h3>
          <p>
            Ask complex technical or strategic questions — get fast, multilingual, expert-level answers powered by large language models and petroleum-trained AI.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🌐 Multilingual & Inclusive</h3>
          <p>
            Work in your native language with intelligent translation pipelines and global community contributions — ensuring accessibility and diversity.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">👷 Global Expert Directory</h3>
          <p>
            Connect with top-tier engineers, consultants, academics, and mentors for live consulting, training, and research collaboration.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📚 Contributor Tools</h3>
          <p>
            Use GitHub-hosted tools to build open datasets, simulators, workflows, and AI copilots for real-world petroleum challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

