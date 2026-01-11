// Store partagé pour les RDV traités
// Stocke les RDV confirmés ET refusés pour empêcher plusieurs actions
export const processedAppointments = new Map<string, 'confirmed' | 'declined'>();
