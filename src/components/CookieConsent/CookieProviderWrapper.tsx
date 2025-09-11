import { type ReactNode } from 'react';
import { useCookieConsent } from './useCookieConsent';
import { CookieConsentContext } from './cookieConsentContext';

interface CookieProviderWrapperProps {
  children: ReactNode;
}

const CookieProviderWrapper = ({ children }: CookieProviderWrapperProps) => {
  const cookieConsent = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieProviderWrapper;
