const Support = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6" id="support">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-lg mb-6">
          PetroBrain Global is an open-source, community-built platform. We rely on the support of sponsors and donors to grow.
        </p>
        <a
          href="https://github.com/sponsors/PBG2025"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Sponsors — Become a Sponsor
        </a>
        <p className="mt-4 text-sm text-gray-600">
          Your contribution helps fund development, infrastructure, and expert collaboration.
        </p>
      </div>
    </section>
  );
};

export default Support;

