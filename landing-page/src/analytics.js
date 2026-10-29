/**
 * Google Analytics 4 (GA4) Integration Helper
 * 
 * Ativa automaticamente o gtag.js quando a variável de ambiente VITE_GA_ID
 * estiver configurada no arquivo .env (ex: VITE_GA_ID=G-XXXXXXXXXX).
 * Se a variável não estiver definida, nenhuma requisição externa é feita.
 */

export function initGA() {
  const gaId = import.meta.env.VITE_GA_ID;

  if (!gaId || typeof window === 'undefined') {
    return;
  }

  // Evita injeção duplicada
  if (document.getElementById('ga-gtag')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'ga-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', gaId, {
    send_page_view: true,
  });
}

/**
 * Dispara eventos personalizados para o Google Analytics
 * @param {string} eventName Nome do evento (ex: 'click_whatsapp')
 * @param {Record<string, any>} [params] Parâmetros adicionais
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
