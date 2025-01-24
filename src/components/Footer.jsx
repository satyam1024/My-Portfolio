import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Brand */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-blue-600">Satyam Kathait</h2>
          <p className="text-lg text-gray-400">
            3rd Year CSE Student | Developer | AI Enthusiast
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github"
              alt="GitHub"
              className="transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              className="transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white"
              alt="Email"
              className="transition-transform transform hover:scale-110"
            />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          &copy; 2025 Satyam Kathait. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
