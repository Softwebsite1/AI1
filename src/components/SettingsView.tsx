import { 
  Settings, 
  Palette, 
  Bell, 
  MapPin, 
  Info, 
  Shield,
  ChevronRight,
  Moon
} from 'lucide-react';
import { Switch } from './ui/switch';
import { useState } from 'react';

export function SettingsView() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [locationTracking, setLocationTracking] = useState(true);

  return (
    <div className="h-full flex flex-col bg-[#FAFBFC]">
      {/* Header */}
      <div className="bg-white px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#005BAC]/10 flex items-center justify-center">
            <Settings className="w-5 h-5 text-[#005BAC]" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-gray-900 text-lg">설정</h1>
            <p className="text-xs text-gray-500 mt-0.5">
              앱 환경설정 및 정보
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-5 space-y-4">
          {/* 테마 설정 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                <Palette className="w-4 h-4 text-gray-600" strokeWidth={2} />
              </div>
              <h2 className="text-gray-900 text-sm">테마</h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Moon className="w-4 h-4 text-gray-500" strokeWidth={2} />
                <div>
                  <p className="text-gray-900 text-sm">다크모드</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    어두운 화면으로 변경
                  </p>
                </div>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-[#005BAC]"
              />
            </div>
          </div>

          {/* 알림 설정 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                <Bell className="w-4 h-4 text-gray-600" strokeWidth={2} />
              </div>
              <h2 className="text-gray-900 text-sm">알림</h2>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 text-sm">푸시 알림</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  공지사항 및 운영시간 변경
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-[#005BAC]"
              />
            </div>
          </div>

          {/* 위치 설정 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-gray-600" strokeWidth={2} />
              </div>
              <h2 className="text-gray-900 text-sm">위치</h2>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 text-sm">위치 추적</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  현재 위치 기반 안내
                </p>
              </div>
              <Switch
                checked={locationTracking}
                onCheckedChange={setLocationTracking}
                className="data-[state=checked]:bg-[#005BAC]"
              />
            </div>
          </div>

          {/* 정보 메뉴 */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors active:bg-gray-100 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-gray-500" strokeWidth={2} />
                <span className="text-gray-900 text-sm">앱 정보</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors active:bg-gray-100">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-gray-500" strokeWidth={2} />
                <span className="text-gray-900 text-sm">개인정보 처리방침</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
            </button>
          </div>

          {/* App Version */}
          <div className="text-center space-y-0.5 pt-6 pb-8">
            <p className="text-xs text-gray-500">Campus Compass</p>
            <p className="text-xs text-gray-400">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
