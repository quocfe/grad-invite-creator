
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
        
        <h1 className="text-3xl font-bold mb-2 navy-accent">THIỆP MỜI</h1>
        <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
        
        <p className="italic text-gray-600 mb-4">
          Trân trọng kính mời
        </p>
        
        <h2 className="text-2xl font-bold mb-8 gold-accent">
          {guestName}
        </h2>
        
        <div className="border-t border-b border-gray-200 py-8 mb-8">
          <p className="text-lg mb-4">
            Đến tham dự Lễ tốt nghiệp của Khóa 2024
          </p>
          
          <div className="flex justify-center items-center gap-3 mb-4">
            <Award className="text-[hsl(var(--navy))]" />
            <p className="text-xl font-semibold navy-accent">Đại học ABC</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto my-6">
            <div className="border-r-0 md:border-r border-dashed border-gray-300">
              <p className="font-semibold">Thời gian</p>
              <p>9:00, Thứ Bảy</p>
              <p>Ngày 15 tháng 6 năm 2024</p>
            </div>
            <div>
              <p className="font-semibold">Địa điểm</p>
              <p>Hội trường lớn</p>
              <p>Khu A - Đại học ABC</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-3">
            <BookOpen size={24} className="text-[hsl(var(--gold))]" />
          </div>
          
          <p className="italic text-gray-600">
            Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi
          </p>
        </div>
        
        <div className="text-center">
          <p className="font-semibold mb-1">Mã QR cho khách mời</p>
          <p className="text-sm text-gray-500 mb-4">Quét mã QR khi tới địa điểm</p>
          
          <div className="w-32 h-32 bg-gray-200 mx-auto flex items-center justify-center mb-6">
            <span className="text-xs text-gray-500">Mã QR</span>
          </div>
          
          <Button 
            onClick={() => setNameEntered(false)} 
            variant="outline" 
            className="border-[hsl(var(--gold))] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/_0.1)]"
          >
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GraduationInvitation;
