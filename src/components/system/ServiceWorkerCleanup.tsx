"use client";

import { useEffect } from "react";

const RELOAD_FLAG = "sw-cleanup-reloaded";

export function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    void (async () => {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const wasControlled = Boolean(navigator.serviceWorker.controller);

      await Promise.all(registrations.map((registration) => registration.unregister()));

      if ("caches" in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
      }

      if (wasControlled && !sessionStorage.getItem(RELOAD_FLAG)) {
        sessionStorage.setItem(RELOAD_FLAG, "true");
        window.location.reload();
      }
    })().catch(() => {
      // Cleanup failure should not block rendering.
    });
  }, []);

  return null;
}
