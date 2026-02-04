const content = document.getElementById("content");
const progress = document.getElementById("progress");

let step = 0;

const steps = [

  // 0 — Opening
  {
    html: `
      <h1>Will you be my Valentine?</h1>
      <p>
        I know this might sound small…<br>
        especially when we’ve already been together for a year.
      </p>
      <button onclick="next()">Yes</button>
      <button id="noBtn">No</button>
    `,
    onLoad: () => {
      const noBtn = document.getElementById("noBtn");
      const move = () => {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 140 - 70 + "px";
      };
      noBtn.addEventListener("mouseover", move);
      noBtn.addEventListener("touchstart", move);
    }
  },

  // 1 — Old question callback
  {
    html: `
      <p>Do you remember when I once asked you…</p>
      <h1>“Do you really deserve this new me?”</h1>
      <button onclick="next()">I remember</button>
    `
  },

  // 2 — Setup
  {
    html: `
      <p>
        Back then, I said I didn’t have an answer.<br>
        I told you I was relying on you for it.
      </p>
      <button onclick="next()">Go on</button>
    `
  },

  // 3 — Truth
  {
    html: `
      <p>
        But the truth is…<br>
        I already knew the answer.
      </p>
      <button onclick="next()">Tell me</button>
    `
  },

  // 4 — Validation
  {
    html: `
      <h1>You deserved it.</h1>
      <p>
        And honestly…<br>
        you deserve even more than that.
      </p>
      <button onclick="next()"><><></button>
    `
  },

  // 5 — Overthinking explained
  {
    html: `
      <p>
        I overthink a lot.<br>
        I get rude sometimes.<br>
        I suspect things I shouldn’t.
      </p>
      <button onclick="next()">I know</button>
    `
  },

  // 6 — Reason (presence moment)
  {
    html: `
      <p>
        That’s because you’re the only one<br>
        who actually cares when I show how I feel.
      </p>
      <button onclick="next()"><><></button>
    `
  },

  // 7 — World vs loneliness
  {
    html: `
      <p>
        The world ignored my existence more times than I can count.<br>
        Sometimes it felt like I didn’t exist at all.
      </p>
      <button onclick="next()">And then?</button>
    `
  },

  // 8 — Core emotional line (presence)
  {
    html: `
      <h1>I think you became my world.</h1>
      <p>
        Because you stayed.<br>
        Because you cared.
      </p>
      <button onclick="next()"><><></button>
    `
  },

  // 9 — Online relationship doubt
  {
    html: `
      <p>
        People don’t really believe online relationships last.<br>
        Even I wasn’t sure at first.
      </p>
      <button onclick="next()">But now?</button>
    `
  },

  // 10 — Definition of love
  {
    html: `
      <p>
        Love isn’t about being physically there.<br>
        It’s about,<br>
        connecting emotionally,<br>
        and never giving up on each other.
      </p>
      <button onclick="next()">I understand</button>
    `
  },

  // 11 — Gratitude (presence)
  {
    html: `
      <p>
        Thank you for choosing me<br>
        when I really needed someone.
      </p>
      <button onclick="next()"><><></button>
    `
  },

  // 12 — Final ask
  {
    html: `
      <h1>So I’ll ask again.</h1>
      <p>
        Will you be my Valentine?<br>
        Till our last breath?
      </p>
      <button onclick="next()">Yes</button>
    `
  },

  // 13 — Ending
 {
  html: `
    <h1>Thank you.</h1>
    <p>
      For choosing me back then.<br>
      And for choosing me again.
    </p>
    <div class="footer">Built for one heart only.</div>
  `,
  onLoad: () => {
    setTimeout(showLovePopup, 3000);
  }
}


];

// Progress dots
function renderProgress() {
  progress.innerHTML = "";
  steps.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i <= step ? " active" : "");
    progress.appendChild(dot);
  });
}

function render() {
  content.innerHTML = steps[step].html;
  renderProgress();
  if (steps[step].onLoad) steps[step].onLoad();
}

function next() {
  step++;
  render();
}

render();

function showLovePopup() {
  const popup = document.createElement("div");

  popup.innerHTML = `I love you Hetal ♥ `;

  popup.style.position = "fixed";
  popup.style.inset = "0";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.background = "rgba(255, 230, 238, 0.85)";
  popup.style.color = "#4a2b35";
  popup.style.fontSize = "2rem";
  popup.style.fontWeight = "500";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 1.2s ease";
  popup.style.zIndex = "999";

  document.body.appendChild(popup);

  requestAnimationFrame(() => {
    popup.style.opacity = "1";
  });
}

