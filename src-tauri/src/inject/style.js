window.addEventListener('DOMContentLoaded', (_event) => {
  const css = `

    header{
      margin-top: 20px;
    }

    .slogan{
      height: 0;
      margin: 20px 0;
      text-indent: -9999px;
    }

    #pack-top-dom:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
    }

    .crisp-client{
      display: none!important;
    }

    #pack-top-dom{
      position:fixed;
      background:transparent;
      top:0;
      width: 100%;
      height: 30px;
      cursor: grab;
      -webkit-app-region: drag;
      user-select: none;
      -webkit-user-select: none;
      z-index: 999999;
    }
  `;
  const styleElement = document.createElement('style');
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);
});
