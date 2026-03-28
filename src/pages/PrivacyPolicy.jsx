import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      <h1>Privacy Policy</h1>

      <p>
        Welcome to <strong>Code With Pradumn</strong>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your personal information
        when you interact with our website or services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect basic personal information such as your name, email address,
        phone number, or any details you provide when you contact us or request services.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information only for the following purposes:
      </p>
      <ul>
        <li>To respond to your queries</li>
        <li>To provide web development services</li>
        <li>To improve our services and communication</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>
        We take appropriate security measures to protect your personal data from
        unauthorized access, misuse, or disclosure.
      </p>

      <h2>4. No Data Selling</h2>
      <p>
        We do not sell, trade, or share your personal information with third parties.
        Your data is safe with us.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites (such as portfolio projects).
        We are not responsible for the privacy practices of those websites.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to request access, update, or delete your personal data
        by contacting us directly.
      </p>

      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions regarding this Privacy Policy, feel free to contact us:
      </p>
      <p>
        📧 Email: codewithpradumn@gmail.com <br />
        📱 Phone: +91 7505254329
      </p>

      <p style={{ marginTop: "30px", fontSize: "14px", color: "gray" }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;