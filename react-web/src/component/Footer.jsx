import React from 'react'
import "../style/Footer.css"
function Footer() {
  return (
    <>
    <div className="footer">
  <div className="footer-one">
    <h2>🌐 Advelon Tech Community</h2>
    <p>
      💡 A non-governmental organisation that helps social initiatives,
      communities, and small businesses implement meaningful digital
      solutions to create a better future.
    </p>
  </div>

  <div className="footer-two">
    <h3>📂 Quick Links</h3>
    <ul>
      <li>🏠 Home</li>
      <li>👥 About</li>
      <li>💬 Consultation</li>
      <li>📰 Blog</li>
      <li>📞 Contact</li>
    </ul>
  </div>

  <div className="footer-three">
    <h3>📞 Contact Us</h3>
    <ul>
      <li>📱 +38 (097) 222-64-54</li>
      <li>📞 +34 (624) 56-86-25</li>
      <li>📧 proarea.tech@gmail.com</li>
    </ul>
    <button>✨ Get in Touch</button>
  </div>

  <div className="footer-four">
    <p>
      © 2025, 🌍 NGO Advelon Tech Community — All rights reserved. <br />
      Copying of site materials is possible only with the consent of the
      copyright holder.
    </p>
  </div>
</div>

    </>
  )
}

export default Footer