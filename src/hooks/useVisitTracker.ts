import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useVisitTracker() {
  const router = useRouter();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('/api/track-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: window.location.pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
          }),
        });
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    // Tracker la visite initiale
    trackVisit();

    // Tracker les changements de page
    const handleRouteChange = () => {
      trackVisit();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

// Hook pour tracker les clics sur les boutons d'achat
export function useTrackPurchaseClick() {
  const trackClick = async (buttonName: string) => {
    try {
      await fetch('/api/track-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: `${window.location.pathname} - Click: ${buttonName}`,
          userAgent: navigator.userAgent,
          referrer: 'Button Click',
        }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  return { trackClick };
}
