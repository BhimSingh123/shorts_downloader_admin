import React from "react";

const Home = () => {
  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <img
          src="/favicon.svg"
          alt="Shorts Downloader"
          style={styles.logo}
        />

        <h1 style={styles.title}>Shorts Downloader</h1>

        <p style={styles.subtitle}>
          Download short videos easily from supported platforms.
          Fast, simple, and secure.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.stackearn.shorts_downloader"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.ctaButton}
        >
          Download on Play Store
        </a>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <Feature
          title="Fast Downloads"
          desc="Quickly download short videos in high quality."
        />
        <Feature
          title="Simple to Use"
          desc="Paste link → Download → Watch offline."
        />
        <Feature
          title="Privacy Focused"
          desc="No login, no personal data collection."
        />
        <Feature
          title="Free with Ads"
          desc="Supported by ads to keep the app free."
        />
      </section>

      {/* INFO */}
      <section style={styles.info}>
        <h2>Why Shorts Downloader?</h2>
        <p>
          Shorts Downloader is designed for users who want a lightweight,
          reliable, and transparent tool to download publicly available short
          videos. We respect user privacy and comply with Google Play policies.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 Shorts Downloader</p>
        <div style={styles.footerLinks}>
          <a href="/privacy-policy" style={styles.link}>
            Privacy Policy
          </a>
          <a href="mailto:stackearn@gmail.com" style={styles.link}>
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

const Feature = ({ title, desc }) => (
  <div style={styles.featureCard}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const styles = {
  page: {
    fontFamily: "Inter, Arial, sans-serif",
    background: "#F6F7FB",
    color: "#222",
    minHeight: "100vh",
  },

  hero: {
    padding: "80px 20px",
    textAlign: "center",
    background:
      "linear-gradient(135deg, #1a73e8 0%, #0f4cbd 100%)",
    color: "#fff",
  },

  logo: {
    width: 96,
    height: 96,
    borderRadius: 24,
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    marginBottom: 12,
  },

  subtitle: {
    maxWidth: 520,
    margin: "0 auto 28px",
    fontSize: 16,
    lineHeight: 1.6,
    opacity: 0.95,
  },

  ctaButton: {
    display: "inline-block",
    background: "#fff",
    color: "#1a73e8",
    padding: "14px 28px",
    borderRadius: 30,
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    padding: "60px 20px",
    maxWidth: 1100,
    margin: "0 auto",
  },

  featureCard: {
    background: "#fff",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  info: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  },

  footer: {
    marginTop: 40,
    padding: "20px",
    textAlign: "center",
    background: "#fff",
    borderTop: "1px solid #eee",
  },

  footerLinks: {
    marginTop: 8,
    display: "flex",
    justifyContent: "center",
    gap: 16,
  },

  link: {
    color: "#1a73e8",
    textDecoration: "none",
    fontSize: 14,
  },
};

export default Home;
