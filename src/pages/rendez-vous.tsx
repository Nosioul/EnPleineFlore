import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const RendezVousPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/create-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Date minimale : aujourd'hui
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <SEO
        title="Prendre rendez-vous - En pleine flore!"
        description="Réservez votre rendez-vous personnalisé pour découvrir le programme Feel Great et comment il peut transformer votre bien-être."
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-flore-orange-50 via-white to-flore-green-50">
          <div className="container-custom py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Prenez <span className="text-gradient">rendez-vous</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Discutons ensemble de vos objectifs de bien-être et découvrez comment le programme Feel Great peut vous aider.
              </p>
            </div>
          </div>
        </section>

        {/* Formulaire Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Avantages du RDV */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Pourquoi prendre rendez-vous ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💬</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Conseil personnalisé</h3>
                    <p className="text-sm text-gray-600">Un échange adapté à vos besoins et objectifs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Plan d'action</h3>
                    <p className="text-sm text-gray-600">Des recommandations concrètes pour débuter</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">✨</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sans engagement</h3>
                    <p className="text-sm text-gray-600">Un simple échange pour répondre à vos questions</p>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Réservez votre créneau
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  {/* Date et Heure */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Date souhaitée *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                        Heure souhaitée *
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flore-orange-500 focus:border-transparent transition resize-none"
                      placeholder="Dites-nous en plus sur vos objectifs et questions..."
                    />
                  </div>

                  {/* Note */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Note :</strong> Après validation, vous recevrez un email de confirmation avec une invitation Google Calendar. Le rendez-vous sera confirmé sous 24h.
                    </p>
                  </div>

                  {/* Bouton Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Réserver mon rendez-vous'}
                  </button>

                  {/* Message de succès affiché en dessous du bouton */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">✅</span>
                        <div>
                          <h3 className="font-semibold text-green-900 mb-1">Rendez-vous confirmé !</h3>
                          <p className="text-sm text-green-700">
                            Vous allez recevoir un email de confirmation. Nous vous contacterons prochainement.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message d'erreur affiché en dessous du bouton */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">❌</span>
                        <div>
                          <h3 className="font-semibold text-red-900 mb-1">Erreur</h3>
                          <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RendezVousPage;
