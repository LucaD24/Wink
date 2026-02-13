// Valentine experience driven entirely by content.json with graceful fallbacks.
const DEBUG = false;
const fallbackContent = {
  "projectTitle": "Valentines for Tara",
  "projectDate": "February 14, 2026",
  "timings": {
    "slideDurationMs": 3500,
    "slideTransitionMs": 600
  },
  "slideshow": {
    "progressAria": "Slide progress",
    "continueLabel": "Press Here to continue",
    "slides": [
      {
        "image": "assets/images/slideshow/SlideShow_1.JPG",
        "caption": "Hey buba",
        "alt": "Romantic placeholder image 01",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_2.JPG",
        "caption": "Just a reminder that you are so special to me",
        "alt": "Romantic placeholder image 02",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_3.JPG",
        "caption": "You make my days softer and my smile bigger",
        "alt": "Romantic placeholder image 03",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_4.JPG",
        "caption": "I love you more than you probably realise",
        "alt": "Romantic placeholder image 04",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_5.jpg",
        "caption": "I am grateful for you, always",
        "alt": "Romantic placeholder image 05",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_6.jpg",
        "caption": "You are my favourite person and my safest place",
        "alt": "Romantic placeholder image 06",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/Slideshow_7.jpg",
        "caption": "If you ever doubt it, I choose you every time",
        "alt": "Romantic placeholder image 07",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/Slideshow_8.jpg",
        "caption": "I would do anything for you, buba",
        "alt": "Romantic placeholder image 08",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_9.JPG",
        "caption": "Your heart is pure and your soul is beautiful",
        "alt": "Romantic placeholder image 09",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_10.jpg",
        "caption": "I am proud of you, for everything you are",
        "alt": "Romantic placeholder image 10",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_11.jpg",
        "caption": "Thank you for loving me the way you do",
        "alt": "Romantic placeholder image 11",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_12.jpg",
        "caption": "Thank you for being you, exactly you",
        "alt": "Romantic placeholder image 12",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_13.jpg",
        "caption": "I cannot wait to make more memories with you",
        "alt": "Romantic placeholder image 13",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_14.jpg",
        "caption": "You are my peace, my joy, and my home",
        "alt": "Romantic placeholder image 14",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_15.jpg",
        "caption": "I love you endlessly, buba",
        "alt": "Romantic placeholder image 15",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_16.jpg",
        "caption": "YOU ARE SUPER SEXY",
        "alt": "Romantic placeholder image 16",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_17.JPG",
        "caption": "YOU SMELL SUPER GOOD TOO",
        "alt": "Romantic placeholder image 17",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_18.JPG",
        "caption": "I R8 you A8 on 8",
        "alt": "Romantic placeholder image 18",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      },
      {
        "image": "assets/images/slideshow/SlideShow_19.JPG",
        "caption": "Now press the button, I have a question for you",
        "alt": "Romantic placeholder image 19",
        "fitMode": "contain",
        "focusX": 50,
        "focusY": 35,
        "zoom": 0.95
      }
    ]
  },
  "sceneB": {
    "question": "Will you be my Valentine's?",
    "yesLabel": "Yes",
    "noLabel": "No",
    "maybeLabel": "Maybe"
  },
  "sceneC": {
    "headline": "You said yes",
    "lines": [
      "Every day with you feels like a gift"
    ],
    "peanutLine": "I am your PEANUT",
    "images": [
      {
        "src": "assets/images/yes/Yes.png",
        "alt": "Yes moment image"
      }
    ],
    "restartLabel": "Start over",
    "riddleTriggerLabel": "hmm"
  },
  "sceneD": {
    "emoji": "\ud83d\ude2d",
    "text": "I am dead now",
    "buttonLabel": "Try again"
  },
  "sceneE": {
    "prompt": "Are youuuuuuuu sure? That is not a real answer!!!",
    "variations": [
      "Think about all the snacks we could share",
      "I can wait but a yes would sparkle",
      "Maybe is cute but yes is iconic",
      "I will trade a joke for a yes"
    ],
    "yesLabel": "Ok fine: Yes",
    "maybeLabel": "Still Maybe"
  },
  "easterEgg": {
    "trigger": "tara",
    "message": "Want to hear a secret??? Tara, you are my favorite!"
  },
  "audio": {
    "enableAudio": true,
    "file": "assets/audio/save_me.mp3",
    "toggleOnLabel": "Audio on",
    "toggleOffLabel": "Audio off",
    "ariaLabel": "Toggle audio"
  },
  "effects": {
    "confetti": {
      "enabled": true,
      "spawnPerSecond": 10,
      "maxOnScreen": 50,
      "fallDurationMsMin": 4200,
      "fallDurationMsMax": 6800,
      "sizePxMin": 6,
      "sizePxMax": 14
    }
  },
  "yesRiddle": {
    "enabled": true,
    "title": "A tiny clue for you, buba",
    "riddle": "I am waiting where your hands like to dance\nI rest on a little mountain of keys\nAnd I am tucked under the thing that wakes up to shine\nGo have a peek, buba",
    "closeLabel": "Close"
  }
};

const state = {
  scene: "intro",
  slideIndex: 0,
  slideTimer: null,
  slideWaitTimer: null,
  waitingForSlide: false,
  slideToken: 0,
  activeSlideImage: null,
  maybeIndex: 0,
  eggTimer: null,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  eventsBound: false,
  riddleOpen: false,
  lastFocus: null,
  riddleEls: null,
  content: null,
  missingLabel: "Photo missing"
};

const elements = {
  slideFrame: document.querySelector(".slide-frame"),
  slideImage: document.getElementById("slide-image"),
  slidePlaceholder: document.getElementById("slide-placeholder"),
  slideCaption: document.getElementById("slide-caption"),
  slideDots: document.getElementById("slide-dots"),
  continueBtn: document.getElementById("continue-btn"),
  question: document.getElementById("question"),
  projectDate: document.getElementById("project-date"),
  yesBtn: document.getElementById("yes-btn"),
  noBtn: document.getElementById("no-btn"),
  maybeBtn: document.getElementById("maybe-btn"),
  yesHeadline: document.getElementById("yes-headline"),
  yesRiddleBtn: document.getElementById("yes-riddle-btn"),
  yesImages: document.getElementById("yes-images"),
  yesLines: document.getElementById("yes-lines"),
  peanutLine: document.getElementById("peanut-line"),
  restartBtn: document.getElementById("restart-btn"),
  noText: document.getElementById("no-text"),
  tryAgainBtn: document.getElementById("try-again-btn"),
  maybeText: document.getElementById("maybe-text"),
  maybeYesBtn: document.getElementById("maybe-yes-btn"),
  maybeStillBtn: document.getElementById("maybe-still-btn"),
  cryingEmoji: document.getElementById("crying-emoji"),
  egg: document.getElementById("egg"),
  eggMessage: document.getElementById("egg-message"),
  confetti: document.getElementById("confetti"),
  audioToggle: document.getElementById("audio-toggle")
};

const effectControllers = { confetti: null };

const preloadState = {
  status: new Map(),
  pending: new Set(),
  queue: [],
  active: 0,
  concurrency: 4,
  images: new Map()
};

const slideLayers = {
  current: elements.slideImage,
  next: null
};

const PRELOAD_WAIT_MS = 200;
const PRELOAD_MAX_WAIT_MS = 8000;

async function loadContent() {
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("content.json not found");
    }
    return await response.json();
  } catch (error) {
    return fallbackContent;
  }
}

function logDebug(message, payload) {
  if (!DEBUG) {
    return;
  }
  if (payload !== undefined) {
    console.info(message, payload);
  } else {
    console.info(message);
  }
}

window.addEventListener("error", (event) => {
  logDebug("Window error", event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  logDebug("Unhandled rejection", event.reason);
});

function updateDebugLabel(sceneName) {
  if (!DEBUG) {
    return;
  }
  let label = document.getElementById("debug-scene");
  if (!label) {
    label = document.createElement("div");
    label.id = "debug-scene";
    label.className = "debug-scene";
    document.body.appendChild(label);
  }
  label.textContent = `Scene ${sceneName}`;
}

function focusScene(sceneName) {
  const focusMap = {
    intro: elements.continueBtn,
    question: elements.yesBtn,
    yes: elements.restartBtn,
    no: elements.tryAgainBtn,
    maybe: elements.maybeYesBtn
  };

  const target = focusMap[sceneName];
  if (!target || target.classList.contains("hidden")) {
    return;
  }

  requestAnimationFrame(() => {
    try {
      target.focus({ preventScroll: true });
    } catch (error) {
      logDebug("Focus error", error);
    }
  });
}

function goToScene(sceneName) {
  state.scene = sceneName;
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach((scene) => {
    const isActive = scene.dataset.scene === sceneName;
    scene.classList.toggle("is-active", isActive);
    scene.classList.toggle("is-hidden", !isActive);
    scene.setAttribute("aria-hidden", String(!isActive));
    scene.style.pointerEvents = isActive ? "auto" : "none";
    scene.style.visibility = isActive ? "visible" : "hidden";
    scene.style.display = isActive ? "flex" : "none";
    if (isActive && sceneName === "question") {
      scene.style.zIndex = "5";
      scene.style.minHeight = "100vh";
    } else if (isActive) {
      scene.style.zIndex = "2";
    } else {
      scene.style.zIndex = "1";
    }
  });
  logDebug("Scene change", sceneName);
  updateDebugLabel(sceneName);
  focusScene(sceneName);
  updateSceneEffects(sceneName);
  if (sceneName !== "yes") {
    closeYesRiddle();
  }
}

function isSceneActive(sceneName) {
  const scene = document.querySelector(`.scene[data-scene="${sceneName}"]`);
  return scene ? scene.classList.contains("is-active") : false;
}

function enforceScene(sceneName) {
  const scene = document.querySelector(`.scene[data-scene="${sceneName}"]`);
  if (!scene) {
    return;
  }
  const style = window.getComputedStyle(scene);
  const rect = scene.getBoundingClientRect();
  if (style.display === "none" || rect.height === 0 || !isSceneActive(sceneName)) {
    logDebug("Scene fallback", { scene: sceneName, display: style.display, height: rect.height });
    scene.classList.add("is-active");
    scene.classList.remove("is-hidden");
    scene.setAttribute("aria-hidden", "false");
    scene.style.display = "flex";
    scene.style.visibility = "visible";
    scene.style.pointerEvents = "auto";
    scene.style.zIndex = sceneName === "question" ? "5" : "2";
    scene.style.minHeight = "100vh";
    focusScene(sceneName);
  }
}

function clampFocus(value, fallback) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return fallback;
  }
  return Math.min(100, Math.max(0, numeric));
}

function clampZoom(value, fallback) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return fallback;
  }
  return Math.min(1.4, Math.max(0.7, numeric));
}

function clampNumber(value, fallback, min, max) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, numeric));
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}



function ensureSlideLayers() {
  if (slideLayers.next) {
    return;
  }
  const nextImg = document.createElement("img");
  nextImg.id = "slide-image-next";
  nextImg.alt = "";
  nextImg.setAttribute("aria-hidden", "true");
  elements.slideImage.setAttribute("aria-hidden", "false");
  elements.slideFrame.insertBefore(nextImg, elements.slidePlaceholder);
  slideLayers.next = nextImg;
}

function getPreloadStatus(url) {
  return preloadState.status.get(url);
}

function markPreloadStatus(url, status) {
  preloadState.status.set(url, status);
}

function enqueuePreload(url, priority = false) {
  if (!url) {
    return;
  }
  const status = getPreloadStatus(url);
  if (status === "loaded" || status === "error" || preloadState.pending.has(url)) {
    return;
  }
  preloadState.pending.add(url);
  if (priority) {
    preloadState.queue.unshift(url);
  } else {
    preloadState.queue.push(url);
  }
  processPreloadQueue();
}

function processPreloadQueue() {
  while (preloadState.active < preloadState.concurrency && preloadState.queue.length) {
    const url = preloadState.queue.shift();
    if (!url || getPreloadStatus(url) || !preloadState.pending.has(url)) {
      preloadState.pending.delete(url);
      continue;
    }
    preloadState.active += 1;
    logDebug("Preload start", url);
    const img = new Image();
    preloadState.images.set(url, img);
    img.onload = () => {
      preloadState.active -= 1;
      preloadState.pending.delete(url);
      markPreloadStatus(url, "loaded");
      logDebug("Preload success", url);
      processPreloadQueue();
    };
    img.onerror = () => {
      preloadState.active -= 1;
      preloadState.pending.delete(url);
      markPreloadStatus(url, "error");
      logDebug("Preload error", url);
      processPreloadQueue();
    };
    img.src = url;
  }
}

function preloadImages(urls, priority = false) {
  urls.forEach((url) => enqueuePreload(url, priority));
}

function preloadAround(index, slides) {
  const urls = [];
  for (let i = 0; i < 3; i += 1) {
    const slide = slides[index + i];
    if (slide && slide.image) {
      urls.push(slide.image);
    }
  }
  preloadImages(urls, true);
}

function preloadAll(slides) {
  const urls = slides.map((slide) => slide.image).filter(Boolean);
  preloadImages(urls, false);
}

function setSlideCaption(slide) {
  const caption = (slide.caption || "").trim();
  elements.slideCaption.textContent = caption;
  elements.slideCaption.classList.toggle("is-empty", caption.length === 0);
}


function updateDots(total, current) {
  elements.slideDots.innerHTML = "";
  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === current) {
      dot.classList.add("is-active");
    }
    elements.slideDots.appendChild(dot);
  }
}

function applySlideStyles(img, slide) {
  img.alt = slide.alt || "";
  const fitMode = slide.fitMode || "cover";
  const focusX = clampFocus(slide.focusX, 50);
  const focusY = clampFocus(slide.focusY, 35);
  const zoom = clampZoom(slide.zoom, 0.95);
  const isContain = fitMode === "contain";
  const positionX = isContain ? 50 : focusX;
  const positionY = isContain ? 50 : focusY;

  img.style.objectFit = isContain ? "contain" : "cover";
  img.style.objectPosition = `${positionX}% ${positionY}%`;
  img.style.transformOrigin = `${positionX}% ${positionY}%`;
  img.style.transform = `scale(${zoom})`;
  elements.slideFrame.classList.toggle("is-contain", isContain);
}

function setPlaceholderVisible(slide, isVisible) {
  if (isVisible) {
    elements.slidePlaceholder.textContent = state.missingLabel || "Photo missing";
    elements.slidePlaceholder.classList.remove("hidden");
  } else {
    elements.slidePlaceholder.classList.add("hidden");
  }
}

function swapSlides(nextIndex, slide, showPlaceholder) {
  const current = slideLayers.current;
  const next = slideLayers.next;

  setSlideCaption(slide);
  updateDots(state.totalSlides, nextIndex);
  state.slideIndex = nextIndex;
  state.activeSlideImage = slide.image;

  next.classList.add("is-visible");
  next.setAttribute("aria-hidden", "false");
  current.classList.remove("is-visible");
  current.setAttribute("aria-hidden", "true");

  slideLayers.current = next;
  slideLayers.next = current;

  setPlaceholderVisible(slide, Boolean(showPlaceholder));
  if (showPlaceholder) {
    logDebug("Placeholder shown", slide.image);
  } else {
    logDebug("Loaded and swapped", slide.image);
  }
}

function loadCurrentSlide(slide) {
  const current = slideLayers.current;
  current.onload = () => {
    if (state.activeSlideImage !== slide.image) {
      return;
    }
    markPreloadStatus(slide.image, "loaded");
    current.classList.add("is-visible");
    setPlaceholderVisible(slide, false);
  };
  current.onerror = () => {
    if (state.activeSlideImage !== slide.image) {
      return;
    }
    markPreloadStatus(slide.image, "error");
    setPlaceholderVisible(slide, true);
  };
  if (slide.isMissing) {
    setPlaceholderVisible(slide, true);
    current.classList.add("is-visible");
    return;
  }
  applySlideStyles(current, slide);
  setPlaceholderVisible(slide, true);
  current.classList.add("is-visible");
  current.src = slide.image;
}


function stopSlideshow() {
  if (state.slideTimer) {
    clearTimeout(state.slideTimer);
    state.slideTimer = null;
  }
  if (state.slideWaitTimer) {
    clearTimeout(state.slideWaitTimer);
    state.slideWaitTimer = null;
  }
  state.waitingForSlide = false;
  state.slideToken += 1;
}

function scheduleNext(content) {
  if (state.slideTimer) {
    clearTimeout(state.slideTimer);
  }
  state.slideTimer = setTimeout(() => {
    attemptAdvance(content);
  }, content.timings.slideDurationMs);
}

function getNextIndex(currentIndex, slides) {
  const nextIndex = currentIndex + 1;
  return nextIndex > slides.length ? slides.length : nextIndex;
}


function attemptAdvance(content) {
  if (state.waitingForSlide) {
    return;
  }

  const slides = content.slideshow.slides;
  const nextIndex = getNextIndex(state.slideIndex, slides);

  if (nextIndex >= slides.length) {
    stopSlideshow();
    elements.continueBtn.classList.remove("hidden");
    logDebug("Continue button shown");
    return;
  }

  const nextSlide = slides[nextIndex];
  if (!nextSlide || !nextSlide.image) {
    logDebug("Failed image and skipped", `missing slide ${nextIndex + 1}`);
    swapSlides(nextIndex, { image: "", caption: "", alt: "" }, true);
    scheduleNext(content);
    return;
  }

  preloadAround(nextIndex, slides);
  logDebug("Attempted next index", nextIndex);

  if (getPreloadStatus(nextSlide.image) === "error") {
    state.waitingForSlide = false;
    swapSlides(nextIndex, nextSlide, true);
    scheduleNext(content);
    return;
  }

  loadNextSlide(content, nextIndex, nextSlide);
}

function loadNextSlide(content, nextIndex, slide) {
  ensureSlideLayers();
  const next = slideLayers.next;
  const token = state.slideToken + 1;
  state.slideToken = token;
  state.waitingForSlide = true;

  let resolved = false;
  const waitStart = Date.now();

  next.onload = () => {
    if (resolved || state.slideToken !== token) {
      return;
    }
    resolved = true;
    markPreloadStatus(slide.image, "loaded");
    state.waitingForSlide = false;
    swapSlides(nextIndex, slide, false);
    scheduleNext(content);
  };

  next.onerror = () => {
    if (resolved || state.slideToken !== token) {
      return;
    }
    resolved = true;
    markPreloadStatus(slide.image, "error");
    state.waitingForSlide = false;
    logDebug("Load failure", slide.image);
    swapSlides(nextIndex, slide, true);
    scheduleNext(content);
  };

  if (slide.isMissing) {
    state.waitingForSlide = false;
    swapSlides(nextIndex, slide, true);
    scheduleNext(content);
    return;
  }

  applySlideStyles(next, slide);
  next.classList.remove("is-visible");
  next.setAttribute("aria-hidden", "true");
  next.src = slide.image;

  const pollReady = () => {
    if (resolved || state.slideToken !== token) {
      return;
    }
    if (next.complete && next.naturalWidth > 0) {
      next.onload();
      return;
    }
    if (Date.now() - waitStart >= PRELOAD_MAX_WAIT_MS) {
      if (!resolved) {
        resolved = true;
        markPreloadStatus(slide.image, "error");
        state.waitingForSlide = false;
        logDebug("Load failure", slide.image);
        swapSlides(nextIndex, slide, true);
        scheduleNext(content);
      }
      return;
    }
    logDebug("Waiting for load", slide.image);
    state.slideWaitTimer = setTimeout(pollReady, PRELOAD_WAIT_MS);
  };

  state.slideWaitTimer = setTimeout(pollReady, PRELOAD_WAIT_MS);
}

function startSlideshow(content) {
  const { slides } = content.slideshow;
  stopSlideshow();
  state.totalSlides = slides.length;
  state.slideIndex = 0;
  state.activeSlideImage = slides[0]?.image || null;
  elements.continueBtn.classList.add("hidden");
  ensureSlideLayers();

  const firstSlide = slides[0];
  if (firstSlide) {
    loadCurrentSlide(firstSlide);
    setSlideCaption(firstSlide);
    updateDots(slides.length, 0);
  }

  preloadAround(0, slides);
  preloadAll(slides);
  scheduleNext(content);
}

function renderYesImages(images) {
  elements.yesImages.innerHTML = "";

  images.forEach((image) => {
    const wrapper = document.createElement("div");
    wrapper.className = "yes-image";

    const img = document.createElement("img");
    img.alt = image.alt || "";

    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder hidden";
    placeholder.textContent = image.src;

    img.onload = () => {
      placeholder.classList.add("hidden");
    };

    img.onerror = () => {
      placeholder.classList.remove("hidden");
    };

    img.src = image.src;

    wrapper.appendChild(img);
    wrapper.appendChild(placeholder);
    elements.yesImages.appendChild(wrapper);
  });
}

// Build pooled falling effects so Safari stays smooth.
function normalizeEffectConfig(config, defaults) {
  const source = { ...defaults, ...(config || {}) };
  const minDuration = clampNumber(source.fallDurationMsMin, defaults.fallDurationMsMin, 1200, 12000);
  const maxDuration = clampNumber(source.fallDurationMsMax, defaults.fallDurationMsMax, minDuration, 15000);
  const minSize = clampNumber(source.sizePxMin, defaults.sizePxMin, 4, 120);
  const maxSize = clampNumber(source.sizePxMax, defaults.sizePxMax, minSize, 160);
  return {
    enabled: Boolean(source.enabled),
    spawnPerSecond: clampNumber(source.spawnPerSecond, defaults.spawnPerSecond, 0.5, 30),
    maxOnScreen: Math.round(clampNumber(source.maxOnScreen, defaults.maxOnScreen, 10, 60)),
    fallDurationMsMin: minDuration,
    fallDurationMsMax: maxDuration,
    sizePxMin: minSize,
    sizePxMax: maxSize
  };
}

function createFallingEffect(container, config, options) {
  if (!container) {
    return { start: () => {}, stop: () => {} };
  }

  const settings = normalizeEffectConfig(config, options.defaults);
  const pool = [];
  const active = new Set();
  let timerId = null;

  const release = (particle) => {
    if (!particle.active) {
      return;
    }
    particle.active = false;
    active.delete(particle);
    particle.el.classList.remove("is-falling");
  };

  const createParticle = () => {
    const el = document.createElement("div");
    el.className = options.className;

    const particle = { el, active: false };
    el.addEventListener("animationend", () => {
      release(particle);
    });

    container.appendChild(el);
    pool.push(particle);
    return particle;
  };

  const spawn = () => {
    if (!settings.enabled || state.reducedMotion) {
      return;
    }
    if (active.size >= settings.maxOnScreen) {
      return;
    }

    let particle = pool.find((item) => !item.active);
    if (!particle && pool.length < settings.maxOnScreen) {
      particle = createParticle();
    }
    if (!particle) {
      return;
    }

    particle.active = true;
    active.add(particle);

    const duration = randomBetween(settings.fallDurationMsMin, settings.fallDurationMsMax);
    const size = randomBetween(settings.sizePxMin, settings.sizePxMax);
    const drift = randomBetween(-28, 28);
    const spin = randomBetween(options.spinMin, options.spinMax);

    // Important per particle styling so we can reuse the same DOM nodes.
    particle.el.style.left = `${randomBetween(4, 96)}%`;
    particle.el.style.setProperty("--duration", `${Math.round(duration)}ms`);
    particle.el.style.setProperty("--size", `${Math.round(size)}px`);
    particle.el.style.setProperty("--drift", `${drift.toFixed(1)}px`);
    particle.el.style.setProperty("--spin", `${spin.toFixed(0)}deg`);
    if (options.colors) {
      const color = options.colors[Math.floor(Math.random() * options.colors.length)];
      particle.el.style.background = color;
    }

    particle.el.classList.remove("is-falling");
    // Force reflow to restart the animation when reusing a node.
    void particle.el.offsetWidth;
    particle.el.classList.add("is-falling");
  };

  const start = () => {
    if (timerId || !settings.enabled || state.reducedMotion) {
      return;
    }
    if (settings.spawnPerSecond <= 0) {
      return;
    }

    const initial = Math.min(settings.maxOnScreen, Math.max(8, Math.round(settings.maxOnScreen * 0.4)));
    for (let i = pool.length; i < initial; i += 1) {
      createParticle();
    }

    const interval = Math.max(60, Math.round(1000 / settings.spawnPerSecond));
    timerId = window.setInterval(spawn, interval);
    spawn();
  };

  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    Array.from(active).forEach((particle) => release(particle));
  };

  return { start, stop };
}

function setupEffects(content) {
  const confettiDefaults = {
    enabled: true,
    spawnPerSecond: 10,
    maxOnScreen: 50,
    fallDurationMsMin: 4200,
    fallDurationMsMax: 6800,
    sizePxMin: 6,
    sizePxMax: 14
  };

  effectControllers.confetti = createFallingEffect(elements.confetti, content.effects?.confetti, {
    className: "confetti-piece",
    colors: ["#ff5b7f", "#c6a9ff", "#ffffff", "#7b4bd7"],
    defaults: confettiDefaults,
    spinMin: -540,
    spinMax: 540
  });

  updateSceneEffects(state.scene);
}

function updateSceneEffects(sceneName) {
  if (effectControllers.confetti) {
    if (sceneName === "yes") {
      effectControllers.confetti.start();
    } else {
      effectControllers.confetti.stop();
    }
  }
}

function renderYesLines(lines) {
  elements.yesLines.innerHTML = "";
  lines.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    elements.yesLines.appendChild(p);
  });
}

function updateMaybePrompt(content) {
  const { prompt, variations } = content.sceneE;
  if (state.maybeIndex === 0) {
    elements.maybeText.textContent = prompt;
    return;
  }
  const variation = variations[(state.maybeIndex - 1) % variations.length];
  elements.maybeText.textContent = variation;
}

function setupEasterEgg(content) {
  const trigger = (content.easterEgg?.trigger || "").trim().toLowerCase();
  const message = (content.easterEgg?.message || "").trim();
  if (!trigger || !message) {
    return;
  }

  let buffer = "";
  document.addEventListener("keydown", (event) => {
    if (event.key.length !== 1) {
      return;
    }
    buffer = (buffer + event.key.toLowerCase()).slice(-trigger.length);
    if (buffer === trigger) {
      elements.eggMessage.textContent = message;
      elements.egg.classList.remove("hidden");
      if (state.eggTimer) {
        clearTimeout(state.eggTimer);
      }
      state.eggTimer = setTimeout(() => {
        elements.egg.classList.add("hidden");
      }, 2200);
    }
  });
}

// Riddle modal shown from the yes scene button.
function setupYesRiddle(content) {
  const config = content.yesRiddle;
  if (!config || !config.enabled || state.riddleEls) {
    return;
  }

  const modal = document.createElement("div");
  modal.className = "riddle-modal hidden";
  modal.id = "riddle-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-labelledby", "riddle-title");
  modal.setAttribute("aria-describedby", "riddle-text");

  const backdrop = document.createElement("div");
  backdrop.className = "riddle-backdrop";

  const card = document.createElement("div");
  card.className = "riddle-card";

  const title = document.createElement("h3");
  title.id = "riddle-title";

  const textBlock = document.createElement("p");
  textBlock.id = "riddle-text";
  textBlock.className = "riddle-text";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "primary riddle-close";
  closeBtn.id = "riddle-close";

  card.appendChild(title);
  card.appendChild(textBlock);
  card.appendChild(closeBtn);
  modal.appendChild(backdrop);
  modal.appendChild(card);
  document.body.appendChild(modal);

  state.riddleEls = { modal, backdrop, card, title, textBlock, closeBtn };
  updateYesRiddleContent(config);

  closeBtn.addEventListener("click", () => {
    closeYesRiddle();
  });

  backdrop.addEventListener("click", () => {
    closeYesRiddle();
  });
}

function updateYesRiddleContent(config) {
  if (!state.riddleEls) {
    return;
  }
  state.riddleEls.title.textContent = config.title || "";
  state.riddleEls.textBlock.textContent = config.riddle || "";
  state.riddleEls.closeBtn.textContent = config.closeLabel || "Close";
}

function handleRiddleKeydown(event) {
  if (!state.riddleOpen || !state.riddleEls) {
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeYesRiddle();
    return;
  }
  if (event.key !== "Tab") {
    return;
  }

  const focusable = state.riddleEls.modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const focusableList = Array.from(focusable).filter((el) => !el.hasAttribute("disabled"));
  if (!focusableList.length) {
    event.preventDefault();
    return;
  }

  const first = focusableList[0];
  const last = focusableList[focusableList.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openYesRiddle() {
  const config = state.content?.yesRiddle;
  if (!config || !config.enabled) {
    return;
  }
  if (!state.riddleEls || state.riddleOpen) {
    return;
  }
  state.lastFocus = document.activeElement;
  state.riddleEls.modal.classList.remove("hidden");
  state.riddleEls.modal.setAttribute("aria-hidden", "false");
  state.riddleOpen = true;
  logDebug("Riddle modal opened");
  document.addEventListener("keydown", handleRiddleKeydown);
  requestAnimationFrame(() => {
    state.riddleEls.closeBtn.focus({ preventScroll: true });
  });
}

function closeYesRiddle() {
  if (!state.riddleEls || !state.riddleOpen) {
    return;
  }
  state.riddleEls.modal.classList.add("hidden");
  state.riddleEls.modal.setAttribute("aria-hidden", "true");
  state.riddleOpen = false;
  document.removeEventListener("keydown", handleRiddleKeydown);
  if (state.lastFocus && typeof state.lastFocus.focus === "function") {
    state.lastFocus.focus({ preventScroll: true });
  }
}

function setupAudio(content) {
  const audioConfig = content.audio;
  if (!audioConfig || !audioConfig.enableAudio) {
    return;
  }
  if (!elements.audioToggle) {
    return;
  }

  try {
    const audio = new Audio(audioConfig.file);
    audio.loop = true;
    audio.muted = true;
    audio.preload = "metadata";

    let isOn = false;

    const updateToggle = () => {
      elements.audioToggle.textContent = isOn
        ? audioConfig.toggleOnLabel
        : audioConfig.toggleOffLabel;
      elements.audioToggle.setAttribute("aria-label", audioConfig.ariaLabel);
      elements.audioToggle.setAttribute("aria-pressed", String(isOn));
    };

    elements.audioToggle.addEventListener("click", () => {
      if (!isOn) {
        audio.play().then(() => {
          audio.muted = false;
          isOn = true;
          updateToggle();
        }).catch((error) => {
          audio.muted = true;
          isOn = false;
          logDebug("Audio play blocked", error);
          updateToggle();
        });
        return;
      } else {
        audio.pause();
        audio.muted = true;
        isOn = false;
      }
      updateToggle();
    });

    audio.addEventListener("canplaythrough", () => {
      elements.audioToggle.classList.remove("hidden");
      updateToggle();
    });

    audio.addEventListener("error", () => {
      elements.audioToggle.classList.add("hidden");
      logDebug("Audio error");
    });

    audio.load();
  } catch (error) {
    logDebug("Audio init error", error);
  }
}

function wireEvents(content) {
  if (state.eventsBound) {
    return;
  }
  state.eventsBound = true;
  elements.continueBtn.addEventListener("click", () => {
    stopSlideshow();
    logDebug("Continue clicked");
    goToScene("question");
    setTimeout(() => {
      enforceScene("question");
    }, 80);
  });

  elements.yesBtn.addEventListener("click", () => {
    goToScene("yes");
  });

  if (elements.yesRiddleBtn) {
    elements.yesRiddleBtn.addEventListener("click", () => {
      logDebug("Riddle trigger clicked");
      openYesRiddle();
    });
  }

  elements.noBtn.addEventListener("click", () => {
    goToScene("no");
  });

  elements.maybeBtn.addEventListener("click", () => {
    state.maybeIndex = 0;
    updateMaybePrompt(content);
    goToScene("maybe");
  });

  elements.tryAgainBtn.addEventListener("click", () => {
    goToScene("question");
  });

  elements.maybeYesBtn.addEventListener("click", () => {
    goToScene("yes");
  });

  elements.maybeStillBtn.addEventListener("click", () => {
    state.maybeIndex += 1;
    updateMaybePrompt(content);
  });

  elements.restartBtn.addEventListener("click", () => {
    goToScene("intro");
    startSlideshow(content);
  });
}

function renderContent(content) {
  state.content = content;
  document.title = content.projectTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = content.projectTitle;
  }

  document.documentElement.style.setProperty(
    "--slide-transition",
    `${content.timings.slideTransitionMs}ms`
  );

  elements.projectDate.textContent = content.projectDate;
  elements.slideDots.setAttribute("aria-label", content.slideshow.progressAria);
  elements.continueBtn.textContent = content.slideshow.continueLabel;
  state.missingLabel = content.slideshow.missingLabel || "Photo missing";

  elements.question.textContent = content.sceneB.question;
  elements.yesBtn.textContent = content.sceneB.yesLabel;
  elements.noBtn.textContent = content.sceneB.noLabel;
  elements.maybeBtn.textContent = content.sceneB.maybeLabel;

  elements.yesHeadline.textContent = content.sceneC.headline;
  const riddleLabel = (content.sceneC.riddleTriggerLabel || "").trim();
  elements.yesRiddleBtn.textContent = riddleLabel;
  elements.yesRiddleBtn.classList.toggle("hidden", !riddleLabel);
  renderYesImages(content.sceneC.images || []);
  renderYesLines(content.sceneC.lines || []);
  elements.peanutLine.textContent = content.sceneC.peanutLine || "";
  elements.restartBtn.textContent = content.sceneC.restartLabel;

  elements.cryingEmoji.textContent = content.sceneD.emoji;
  elements.noText.textContent = content.sceneD.text;
  elements.tryAgainBtn.textContent = content.sceneD.buttonLabel;

  elements.maybeYesBtn.textContent = content.sceneE.yesLabel;
  elements.maybeStillBtn.textContent = content.sceneE.maybeLabel;
  updateMaybePrompt(content);

  if (state.reducedMotion) {
    document.body.classList.add("reduced-motion");
  }

  setupEffects(content);
  setupYesRiddle(content);
  startSlideshow(content);
  setupEasterEgg(content);
  wireEvents(content);
  setupAudio(content);
}

loadContent().then((content) => {
  const merged = {
    ...fallbackContent,
    ...content,
    timings: { ...fallbackContent.timings, ...content.timings },
    slideshow: { ...fallbackContent.slideshow, ...content.slideshow },
    sceneB: { ...fallbackContent.sceneB, ...content.sceneB },
    sceneC: { ...fallbackContent.sceneC, ...content.sceneC },
    sceneD: { ...fallbackContent.sceneD, ...content.sceneD },
    sceneE: { ...fallbackContent.sceneE, ...content.sceneE },
    yesRiddle: { ...fallbackContent.yesRiddle, ...content.yesRiddle },
    easterEgg: { ...fallbackContent.easterEgg, ...content.easterEgg },
    audio: { ...fallbackContent.audio, ...content.audio },
    effects: { ...fallbackContent.effects, ...content.effects }
  };

  renderContent(merged);
});
