import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInvitation } from '@/context/InvitationContext';
import { GraduationCap } from 'lucide-react';

// Utility function để remove dấu tiếng Việt và normalize chữ thường
const normalizeVietnamese = (str: string) => {
  return str
    .normalize("NFD") // Tách dấu
    .replace(/[\u0300-\u036f]/g, "") // Xoá dấu
    .toLowerCase();
};

const allowList = [
  "gấm", "diễm", "nhâm", "vy", "quân", "phương anh", "huỳnh"
].map(normalizeVietnamese); // Chuẩn hoá sẵn để so sánh

const NameForm: React.FC = () => {
  const { setGuestName, setNameEntered } = useInvitation();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Vui lòng nhập tên của bạn");
      return;
    }

    const normalized = normalizeVietnamese(name);

    const isAllowed = allowList.some((allowedName) =>
      normalized.includes(allowedName)
    );

    if (!isAllowed) {
      setError("Tên bạn không có trong danh sách nhé 🙁");
      return;
    }

    setGuestName(name);
    setNameEntered(true);
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 invitation-card rounded-lg fade-in">
      <div className="flex justify-center mb-6">
        <GraduationCap size={60} className="text-[hsl(var(--gold))] confetti-animation" />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6 navy-accent">
        Chào nha, Quốc tốt nghiệp rồi nè!
      </h2>

      <p className="text-center mb-8 text-gray-600">
        Hãy nhập tên của bạn để xem thông báo nhé!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Nhập tên của bạn"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            className="border-2 py-6 text-center text-lg"
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full py-6 bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy)/_0.8)] text-white font-semibold"
        >
          Bấm dô đây đi!
        </Button>
      </form>
    </div>
  );
};

export default NameForm;
