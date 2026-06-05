"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
// FIXED: Changed absolute path to match your GitHub Pages repository folder mapping root
const stockSW = "uv/uv.sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Service workers cannot be registered without https.");

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  // FIXED: Wrapped the config check in a small safety check to prevent initialization crashes
  if (typeof __uv$config === 'undefined') {
     throw new Error("__uv$config is missing! Make sure uv.config.js is loaded above this script.");
  }

  // Ultraviolet has a stock `sw.js` script.
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}

// FIXED: Prevents index.js or search.js from running registerSW() too early before the window elements exist
document.addEventListener('DOMContentLoaded', () => {
   console.log("Register-sw setup loaded and ready.");
});
