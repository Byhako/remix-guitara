const { RemixBrowser } = require("@remix-run/react");

const { startTransition } = require("react");

const { hydrateRoot } = require("react-dom/client");

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <>
        <RemixBrowser />
      </>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
