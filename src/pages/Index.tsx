
import React from 'react';
import NameForm from '@/components/NameForm';
import GraduationInvitation from '@/components/GraduationInvitation';
import { InvitationProvider, useInvitation } from '@/context/InvitationContext';

const InvitationContent: React.FC = () => {
  const { nameEntered } = useInvitation();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 graduation-bg">
      {!nameEntered ? <NameForm /> : <GraduationInvitation />}
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <InvitationProvider>
      <InvitationContent />
    </InvitationProvider>
  );
};

export default Index;
