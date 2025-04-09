
import React from 'react';
import { useInvitation } from '@/context/InvitationContext';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const GraduationInvitation: React.FC = () => {
  const { guestName, setNameEntered } = useInvitation();
  
  return (
    <div className="max-w-2xl w-full mx-auto p-8 invitation-card rounded-lg fade-in">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <GraduationCap size={60} className="text-[hsl(var(--gold))]" />
        </div>
        {/* oke
         */}
        <h1 className="text-3xl font-bold mb-2 navy-accent">THIỆP THÔNG BÁO</h1>
        <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
        
        <p className="italic text-gray-600 mb-4">
          Trân trọng thông báo đến bạn
        </p>
        
        <h2 className="text-2xl font-bold mb-8 gold-accent">
          {guestName}
        </h2>
        
        <div className="border-t border-b border-gray-200 py-8 mb-8">
          <p className="text-lg mb-4">
            Xin thông báo rằng Quốc đã tốt nghiệp <strong style={{ color: 'hsl(var(--gold))' }}>XUẤT SẮC</strong>
          </p>
        
          
          <div className="flex justify-center items-center gap-3 mb-4">
            <Award className="text-[hsl(var(--navy))]" />
            <p className="text-xl font-semibold navy-accent">Trường Cao đẳng FPT Polytechnic</p>
          </div>

          <div className="flex justify-center items-center gap-3 mb-4">
            <p className="text-xl font-semibold navy-accent">Thời gian tốt nghiệp:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto my-6">
            <div className="border-r-0 md:border-r border-dashed border-gray-300">
              <p className="font-semibold">Thời gian</p>
              <p>13h00, Chủ nhật</p>
              <p>Ngày 04/05/2025. </p>
            </div>
            <div>
              <p className="font-semibold">Địa điểm</p>
              <p>Cung thể thao Tiên Sơn <br />Thành phố Đà Nẵng.</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-3">
            <BookOpen size={24} className="text-[hsl(var(--gold))]" />
          </div>
          
          <p className="italic text-gray-600">
            Cảm ơn bạn đã đọc thông báo này!
          </p>
        </div>
        
        
      </div>
    </div>
  );
};

export default GraduationInvitation;
