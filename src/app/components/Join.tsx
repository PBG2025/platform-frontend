// components/Join.tsx
export default function Join() {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">🤝 Join the Movement</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">👨‍💻 Developers & Domain Experts</h3>
            <p>
              Contribute code, AI models, simulators, and datasets that power real-world oil and gas innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🧪 Researchers & Translators</h3>
            <p>
              Help improve platform accuracy, expand language support, and train new AI models for technical reasoning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🌍 Sponsors & Institutions</h3>
            <p>
              Support sustainable energy innovation. Fund open-source projects, models, and expert services.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <p className="text-lg">
            📂 <a href="https://github.com/PBG2025?tab=repositories" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Contribute on GitHub</a>
          </p>
          <p className="text-lg">
            🎓 <a href="https://join.slack.com/t/petrobrain-global/shared_invite/zt-3abq93jb6-oaVlmCsELYwKiI4y7Dpygw" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Join Our Slack Community</a>
          </p>
          <p className="text-lg">
            🔗 <a href="https://www.linkedin.com/company/petrobrain-global-inc" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Follow Us on LinkedIn</a>
          </p>
          <p className="text-lg">
            🐦 <a href="https://x.com/PetroBrainGlob" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Follow Us on X (Twitter)</a>
          </p>
        </div>
      </div>
    </section>
  );
}

