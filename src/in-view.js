(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: contents;
      }
    </style>
    <slot></slot>
  `;

  class InView extends HTMLElement {
    constructor() {
      super();

      this._options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      };

      this._callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "");
            entry.target.setAttribute("data-in-view-once", "");
          } else {
            entry.target.removeAttribute("data-in-view");
          }
        });
      };

      this._observer = new IntersectionObserver(this._callback, this._options);

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      Array.from(this.children).forEach((el) => {
        this._observer.observe(el);
      });
    }
  }

  window.customElements.define("in-view", InView);
})();
