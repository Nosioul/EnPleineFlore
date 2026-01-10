import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Générer ou récupérer un ID de session unique
function getSessionId(): string {
  const SESSION_KEY = 'visitor_session_id';

  // Vérifier si on a déjà un ID de session
  let sessionId = localStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    // Créer un nouvel ID unique
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

// Compter le nombre de visites (nouveau visiteur ou visiteur récurrent)
function getVisitCount(): number {
  const VISIT_COUNT_KEY = 'visitor_visit_count';
  const LAST_VISIT_KEY = 'visitor_last_visit';

  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  const now = Date.now();

  // Si la dernière visite était il y a plus de 30 minutes, c'est une nouvelle visite
  const isNewVisit = !lastVisit || (now - parseInt(lastVisit)) > 30 * 60 * 1000;

  let visitCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0');

  if (isNewVisit) {
    visitCount++;
    localStorage.setItem(VISIT_COUNT_KEY, visitCount.toString());
    localStorage.setItem(LAST_VISIT_KEY, now.toString());
  }

  return visitCount;
}

export function useVisitTracker() {
  const router = useRouter();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const sessionId = getSessionId();
        const visitCount = getVisitCount();

        await fetch('/api/track-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: window.location.pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            sessionId,
            visitCount,
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
      const sessionId = getSessionId();
      const visitCount = getVisitCount();

      await fetch('/api/track-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: `${window.location.pathname} - Click: ${buttonName}`,
          userAgent: navigator.userAgent,
          referrer: 'Button Click',
          sessionId,
          visitCount,
        }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  return { trackClick };
}
