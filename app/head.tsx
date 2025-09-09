export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <script dangerouslySetInnerHTML={{ __html: `(function(){
  try{
    if (window.__fetchPatched) return;

    // Save native fetch early
    if (typeof window.fetch === 'function') {
      try { window.__native_fetch = window.fetch.bind(window); } catch (e) { window.__native_fetch = window.fetch; }
    }

    // Patched fetch that defers to saved native fetch and never throws synchronously
    window.__patched_fetch = function(){
      try {
        if (typeof window.__native_fetch === 'function') {
          return window.__native_fetch.apply(this, arguments);
        }
        // fallback to original fetch if native not available
        return Promise.resolve().then(function(){ return window.fetch.apply(window, arguments); });
      } catch (err) {
        return Promise.reject(err);
      }
    };

    try { window.fetch = window.__patched_fetch; } catch(e) {}

    // Monitor and restore patched fetch if overwritten by third-party scripts
    try{
      var _restoreInterval = setInterval(function(){
        if (window.fetch !== window.__patched_fetch) {
          try { window.fetch = window.__patched_fetch; } catch (e) {}
        }
      }, 1000);

      // Stop monitoring after 30s
      setTimeout(function(){ clearInterval(_restoreInterval); }, 30000);
    } catch(e){}

    window.__fetchPatched = true;
  } catch(e){}
})();` }} />
    </>
  )
}
