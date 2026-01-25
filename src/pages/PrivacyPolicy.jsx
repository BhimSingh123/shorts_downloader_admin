import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p style={styles.updated}>Last Updated: January 2026</p>

      <p>
        Shorts Downloader ("we", "our", or "us") respects your privacy and is
        committed to protecting it. This Privacy Policy explains how information
        is handled when you use our mobile application.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do <b>not directly collect</b> any personally identifiable information
        such as name, phone number, email address, Aadhaar, PAN, bank details, or
        contacts.
      </p>

      {/* <p>
        However, the app uses third-party services that may automatically collect
        certain information required for app functionality, analytics, and
        advertising.
      </p> */}

      <ul>
        <li>
          <b>Device Information:</b> Advertising ID, device type.
        </li>
        <li>
          <b>Usage Data:</b> App interactions, feature usage.
        </li>
        <li>
          <b>Diagnostics:</b> Crash logs and performance data.
        </li>
      </ul>

      <h2>2. Permissions Used</h2>
      <ul>
        <li>
          <b>Storage Access:</b> To save downloaded videos on your device.
        </li>
        <li>
          <b>Internet Access:</b> To fetch publicly available video content and
          load advertisements.
        </li>
      </ul>

      <h2>3. How Information Is Used</h2>
      <p>The collected information is used only to:</p>
      <ul>
        <li>Provide and improve app functionality</li>
        <li>Display advertisements</li>
        <li>Monitor app performance and fix crashes</li>
      </ul>

      <h2>4. Advertising (Google AdMob)</h2>
      <p>
        Shorts Downloader displays ads using <b>Google AdMob</b>.
        Google AdMob may collect and use information such as Advertising ID,
        cookies, and device identifiers to show personalized or non-personalized
        ads.
      </p>

      <p>
        Learn how Google uses data from apps that use its services:
        <br />
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/technologies/partner-sites
        </a>
      </p>

      <h2>5. Analytics & Crash Reporting</h2>
      <p>
        We may use services such as <b>Firebase Analytics</b> and
        <b> Firebase Crashlytics</b> to understand app usage and improve stability.
        These services may collect anonymized usage and diagnostic data.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell or rent personal data. Data may be shared only with
        trusted third-party service providers (such as Google) strictly for
        analytics and advertising purposes.
      </p>

      <h2>7. Payments & Subscriptions</h2>
      <p>
        The app does not collect payment or billing information directly.
        Any purchases (if introduced) will be handled securely through
        Google Play Billing.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        Shorts Downloader is not intended for children under the age of 13.
        We do not knowingly collect data from children.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We take reasonable measures to protect information. Downloaded videos
        are stored locally on the user’s device and are not uploaded to our
        servers.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page. Continued use of the app indicates acceptance of
        the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <b>stackearn@gmail.com</b>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '32px',
    background: '#ffffff',
    borderRadius: '12px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    lineHeight: 1.7,
    color: '#333',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  updated: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '20px',
  },
};

export default PrivacyPolicy;
