// Store partagé pour les RDV traités (confirmés ou refusés)
// Cela empêche d'envoyer plusieurs emails pour le même RDV
export const processedAppointments = new Set<string>();
