import { createContext, useContext } from 'react';
import { useCookieConsent } from './useCookieConsent';

export type CookieConsentContextType = ReturnType<typeof useCookieConsent>;

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsentContext = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsentContext must be used within a CookieProviderWrapper');
  }
  return context;
};
