import { createContext, type ReactNode, useContext } from 'react';
import { useCookieConsent } from './useCookieConsent';

type CookieConsentContextType = ReturnType<typeof useCookieConsent>;

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsentContext = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsentContext must be used within a CookieProviderWrapper');
  }
  return context;
};

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
