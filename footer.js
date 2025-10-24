class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(to right, #ec4899, #8b5cf6);
          color: white;
          padding: 3rem 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(to right, #f9a8d4, #c4b5fd);
        }
        p {
          font-size: 1.2rem;
          margin: 0;
          font-family: 'Dancing Script', cursive;
          position: relative;
          z-index: 1;
        }
        .signature {
          font-size: 1.5rem;
          margin-top: 0.5rem;
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 2rem;
          border-radius: 9999px;
        }
      </style>
      <footer>
        <p>May your special day be as wonderful as you are</p>
        <div class="signature">Forever Yours, Deepesh 💌</div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);