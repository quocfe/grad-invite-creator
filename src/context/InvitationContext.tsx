
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface InvitationContextType {
  guestName: string;
  setGuestName: (name: string) => void;
  nameEntered: boolean;
  setNameEntered: (entered: boolean) => void;
}

const defaultContextValue: InvitationContextType = {
  guestName: '',
  setGuestName: () => {},
  nameEntered: false,
  setNameEntered: () => {}
};

const InvitationContext = createContext<InvitationContextType>(defaultContextValue);

export const useInvitation = () => useContext(InvitationContext);

interface InvitationProviderProps {
  children: ReactNode;
}

export const InvitationProvider: React.FC<InvitationProviderProps> = ({ children }) => {
  const [guestName, setGuestName] = useState('');
  const [nameEntered, setNameEntered] = useState(false);

  return (
    <InvitationContext.Provider value={{
      guestName,
      setGuestName,
      nameEntered,
      setNameEntered
    }}>
      {children}
    </InvitationContext.Provider>
  );
};
