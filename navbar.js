class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .logo {
          font-family: 'Dancing Script', cursive;
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          font-family: 'Poppins', sans-serif;
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        a:hover {
          color: #ec4899;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(to right, #ec4899, #8b5cf6);
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 0.5rem;
          }
          ul {
            margin-top: 0.5rem;
            gap: 1rem;
          }
        }
      </style>
      <nav>
        <div class="logo">💐 Happy Birthday, My Queen 💐</div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#memories">Memories</a></li>
          <li><a href="#message">Message</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);