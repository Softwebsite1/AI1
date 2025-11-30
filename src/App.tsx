import { useState } from 'react';
import { MapView } from './components/MapView';
import { FavoritesList } from './components/FavoritesList';
import { SettingsView } from './components/SettingsView';
import { FacilityDetailSheet } from './components/FacilityDetailSheet';
import { Map, Heart, Settings } from 'lucide-react';

export interface Facility {
  id: number;
  name: string;
  category: 'cafe' | 'restaurant' | 'library' | 'atm' | 'convenience' | 'medical' | 'gym' | 'lounge' | 'transport';
  building: string;
  floor: string;
  hours: string;
  description?: string;
  contact?: string;
  image?: string;
  latitude: number;
  longitude: number;
  isFavorite?: boolean;
}

// 백석대학교 편의시설 데이터
export const facilities: Facility[] = [
  // 본부동
  {
    id: 1,
    name: '매점',
    category: 'convenience',
    building: '본부동',
    floor: '6층',
    hours: '평일 09:00-18:00',
    description: '학생들에게 교내생활에 필요한 양질의 상품을 저렴한 가격으로 공급하고 있습니다.',
    contact: '041-620-9509',
    latitude: 36.7672,
    longitude: 127.0744,
    isFavorite: false,
  },
  {
    id: 2,
    name: '가스펠 하우스',
    category: 'cafe',
    building: '본부동',
    floor: '지하 1층',
    hours: '평일 08:00-19:00',
    description: '학생들에게 식사와 차, 음료 등을 저렴한 가격으로 공급하고 있습니다.',
    contact: '041-550-0858',
    latitude: 36.7670,
    longitude: 127.0742,
    isFavorite: false,
  },
  {
    id: 3,
    name: '복사기 (본부동 6층)',
    category: 'convenience',
    building: '본부동',
    floor: '6층 로비',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의를 위하여 복사기 및 프린터기를 설치하여 운영하고 있습니다.',
    contact: '041-550-0722',
    latitude: 36.7672,
    longitude: 127.0745,
    isFavorite: false,
  },
  {
    id: 4,
    name: '복사기 (본부동 8층)',
    category: 'convenience',
    building: '본부동',
    floor: '8층 로비',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의를 위하여 복사기 및 프린터기를 설치하여 운영하고 있습니다.',
    contact: '041-550-0722',
    latitude: 36.7673,
    longitude: 127.0745,
    isFavorite: false,
  },
  {
    id: 5,
    name: '라운지 (본부동 3층)',
    category: 'lounge',
    building: '본부동',
    floor: '3층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7671,
    longitude: 127.0743,
    isFavorite: false,
  },
  {
    id: 6,
    name: '라운지 (본부동 4층)',
    category: 'lounge',
    building: '본부동',
    floor: '4층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7671,
    longitude: 127.0744,
    isFavorite: false,
  },
  {
    id: 7,
    name: '라운지 (본부동 5층)',
    category: 'lounge',
    building: '본부동',
    floor: '5층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7672,
    longitude: 127.0743,
    isFavorite: false,
  },
  {
    id: 8,
    name: '라운지 (본부동 6층)',
    category: 'lounge',
    building: '본부동',
    floor: '6층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7672,
    longitude: 127.0744,
    isFavorite: false,
  },
  {
    id: 9,
    name: '라운지 (본부동 7층)',
    category: 'lounge',
    building: '본부동',
    floor: '7층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7673,
    longitude: 127.0743,
    isFavorite: false,
  },
  {
    id: 10,
    name: '라운지 (본부동 8층)',
    category: 'lounge',
    building: '본부동',
    floor: '8층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7673,
    longitude: 127.0744,
    isFavorite: false,
  },
  {
    id: 11,
    name: '라운지 (본부동 9층)',
    category: 'lounge',
    building: '본부동',
    floor: '9층',
    hours: '24시간',
    description: '학생들이 쉬는 공간으로 운영하고 있습니다.',
    latitude: 36.7674,
    longitude: 127.0743,
    isFavorite: false,
  },
  // 진리관
  {
    id: 12,
    name: '우체국',
    category: 'convenience',
    building: '진리관',
    floor: '1층',
    hours: '평일 09:00-17:00',
    description: '국내, 국제우편 등 일반우체국의 모든 우편서비스를 제공하고 있습니다.',
    contact: '041-550-0730',
    latitude: 36.7668,
    longitude: 127.0748,
    isFavorite: false,
  },
  {
    id: 13,
    name: '서점',
    category: 'convenience',
    building: '진리관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '수업교재를 비롯하여 각종 교양도서, 국내외 전문서적 등을 구비하고 있습니다.',
    contact: '041-550-9198',
    latitude: 36.7669,
    longitude: 127.0748,
    isFavorite: false,
  },
  {
    id: 14,
    name: '복사기 (진리관 1층)',
    category: 'convenience',
    building: '진리관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의를 위하여 복사기 및 프린터기를 설치하여 운영하고 있습니다.',
    contact: '041-550-0722',
    latitude: 36.7668,
    longitude: 127.0749,
    isFavorite: false,
  },
  {
    id: 15,
    name: '복사기 (진리관 3층)',
    category: 'convenience',
    building: '진리관',
    floor: '3층 별관',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의를 위하여 복사기 및 프린터기를 설치하여 운영하고 있습니다.',
    contact: '041-550-0722',
    latitude: 36.7669,
    longitude: 127.0749,
    isFavorite: false,
  },
  {
    id: 16,
    name: '보건실',
    category: 'medical',
    building: '진리관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '학생들의 건강을 위하여 최선을 다하겠습니다.',
    latitude: 36.7668,
    longitude: 127.0747,
    isFavorite: false,
  },
  {
    id: 17,
    name: '여학생회복실',
    category: 'lounge',
    building: '진리관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '여학생들의 편익도모와 쉼터를 제공하고 있습니다.',
    latitude: 36.7668,
    longitude: 127.0746,
    isFavorite: false,
  },
  // 학생복지관
  {
    id: 18,
    name: '식당 (학생복지관)',
    category: 'restaurant',
    building: '학생복지관',
    floor: '지하 1층',
    hours: '평일 11:30-13:30, 17:30-19:00',
    description: '지하 1층 약 300여 석으로 친절과 서비스로 정성을 다하여 운영하고 있습니다.',
    contact: '041-550-9576',
    latitude: 36.7665,
    longitude: 127.0750,
    isFavorite: false,
  },
  {
    id: 19,
    name: '사진관',
    category: 'convenience',
    building: '학생복지관',
    floor: '2층',
    hours: '평일 09:00-18:00',
    description: '증명사진과 반명함, 여권사진, 가족사진 등 사진관 서비스 및 소모품 판매.',
    contact: '041-550-0471',
    latitude: 36.7665,
    longitude: 127.0751,
    isFavorite: false,
  },
  {
    id: 20,
    name: '복사점 (학생복지관)',
    category: 'convenience',
    building: '학생복지관',
    floor: '지하 1층',
    hours: '평일 09:00-18:00',
    description: '다양한 형태로 복사, 프린터, FAX 등을 설치하여 운영하는 전문 매장입니다.',
    contact: '041-561-0722',
    latitude: 36.7666,
    longitude: 127.0750,
    isFavorite: false,
  },
  {
    id: 21,
    name: '복사기 (학생복지관)',
    category: 'convenience',
    building: '학생복지관',
    floor: '2층',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의를 위하여 복사기를 설치하여 운영하고 있습니다.',
    latitude: 36.7665,
    longitude: 127.0752,
    isFavorite: false,
  },
  {
    id: 22,
    name: '탁구장',
    category: 'gym',
    building: '학생복지관',
    floor: '지하 1층',
    hours: '평일 09:00-21:00',
    description: '학생들의 건전한 여가활동을 위해 탁구대가 설치되어 있습니다.',
    latitude: 36.7666,
    longitude: 127.0751,
    isFavorite: false,
  },
  // 목양관
  {
    id: 23,
    name: '복사점 (목양관)',
    category: 'convenience',
    building: '목양관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의제공을 위하여 복사기 및 프린터기를 설치하여 운영하고 있습니다.',
    contact: '041-561-0722',
    latitude: 36.7677,
    longitude: 127.0740,
    isFavorite: false,
  },
  {
    id: 24,
    name: '휴게실 (목양관 3층)',
    category: 'lounge',
    building: '목양관',
    floor: '3층',
    hours: '24시간',
    description: '학생들의 편익도모와 쉼터를 제공하고 있습니다.',
    latitude: 36.7677,
    longitude: 127.0741,
    isFavorite: false,
  },
  {
    id: 25,
    name: '휴게실 (목양관 4층)',
    category: 'lounge',
    building: '목양관',
    floor: '4층',
    hours: '24시간',
    description: '학생들의 편익도모와 쉼터를 제공하고 있습니다.',
    latitude: 36.7677,
    longitude: 127.0742,
    isFavorite: false,
  },
  {
    id: 26,
    name: '휴게실 (목양관 5층)',
    category: 'lounge',
    building: '목양관',
    floor: '5층',
    hours: '24시간',
    description: '학생들의 편익도모와 쉼터를 제공하고 있습니다.',
    latitude: 36.7677,
    longitude: 127.0743,
    isFavorite: false,
  },
  // 교수회관
  {
    id: 27,
    name: '식당 (교수회관 1층)',
    category: 'restaurant',
    building: '교수회관',
    floor: '1층',
    hours: '평일 11:30-13:30, 17:30-19:00',
    description: '1층 약 360여 석으로 친절과 서비스로 정성을 다하여 운영하고 있습니다.',
    contact: '041-620-9578',
    latitude: 36.7680,
    longitude: 127.0735,
    isFavorite: false,
  },
  {
    id: 28,
    name: '교수식당 (교수회관 2층)',
    category: 'restaurant',
    building: '교수회관',
    floor: '2층',
    hours: '평일 11:30-13:30',
    description: '2층 약 365여 석으로 친절과 서비스로 정성을 다하여 운영하고 있습니다.',
    contact: '041-620-9578',
    latitude: 36.7680,
    longitude: 127.0736,
    isFavorite: false,
  },
  {
    id: 29,
    name: '매점 (교수회관)',
    category: 'convenience',
    building: '교수회관',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '학생들에게 교내생활에 필요한 양질의 상품을 저렴한 가격으로 공급하고 있습니다.',
    latitude: 36.7681,
    longitude: 127.0735,
    isFavorite: false,
  },
  // 예술동
  {
    id: 30,
    name: '매점 (예술동)',
    category: 'convenience',
    building: '예술동',
    floor: '5층',
    hours: '평일 09:00-18:00',
    description: '학생들에게 교내생활에 필요한 양질의 상품을 저렴한 가격으로 공급하고 있습니다.',
    contact: '041-620-9676',
    latitude: 36.7685,
    longitude: 127.0738,
    isFavorite: false,
  },
  {
    id: 31,
    name: '복사기 (예술동 1층)',
    category: 'convenience',
    building: '예술동',
    floor: '1층 로비',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의제공을 위하여 복사기를 설치하여 운영하고 있습니다.',
    contact: '041-561-0722',
    latitude: 36.7685,
    longitude: 127.0739,
    isFavorite: false,
  },
  {
    id: 32,
    name: '복사기 (예술동 7층)',
    category: 'convenience',
    building: '예술동',
    floor: '7층',
    hours: '평일 09:00-18:00',
    description: '학생들의 편의제공을 위하여 복사기를 설치하여 운영하고 있습니다.',
    contact: '041-561-0722',
    latitude: 36.7686,
    longitude: 127.0738,
    isFavorite: false,
  },
  // 인성관
  {
    id: 33,
    name: '증명서 발급기',
    category: 'convenience',
    building: '인성관',
    floor: '1층 로비',
    hours: '24시간',
    description: '학부/대학원의 각종 증명서 발급을 도와드립니다.',
    contact: '041-550-0780',
    latitude: 36.7670,
    longitude: 127.0755,
    isFavorite: false,
  },
  // 백석생활관
  {
    id: 34,
    name: '식당 (백석생활관)',
    category: 'restaurant',
    building: '백석생활관',
    floor: '1층',
    hours: '평일 07:30-09:00, 11:30-13:00, 17:30-19:00',
    description: '친절과 서비스로 정성을 다하여 운영하고 있습니다.',
    contact: '010-8805-1215',
    latitude: 36.7690,
    longitude: 127.0730,
    isFavorite: false,
  },
  // 통학버스
  {
    id: 35,
    name: '통학버스 승차장',
    category: 'transport',
    building: '통학버스 승차장',
    floor: '지상',
    hours: '평일 07:00-22:00',
    description: '학생들의 안전과 편리한 수송을 위하여 최선의 노력을 다하겠습니다. (신정관광/블루관광)',
    contact: '041-567-3001',
    latitude: 36.7675,
    longitude: 127.0745,
    isFavorite: false,
  },
  // 정보검색실
  {
    id: 36,
    name: '정보검색실 (본부동 1층)',
    category: 'library',
    building: '본부동',
    floor: '1층',
    hours: '평일 09:00-18:00',
    description: '검색 및 워드 작업 가능. 1층 구 NA 캠퍼스 샵',
    latitude: 36.7670,
    longitude: 127.0745,
    isFavorite: false,
  },
  {
    id: 37,
    name: '맥실습실 (본부동 5층)',
    category: 'library',
    building: '본부동',
    floor: '5층',
    hours: '평일 09:00-18:00',
    description: '맥 실습실, 신청 후 사용 가능 (디자인영상학부 사무실에 신청)',
    contact: '041-620-9714',
    latitude: 36.7671,
    longitude: 127.0745,
    isFavorite: false,
  },
  {
    id: 38,
    name: '개방전산실 (목양관 5층)',
    category: 'library',
    building: '목양관',
    floor: '5층',
    hours: '평일 09:00-18:00',
    description: '검색 및 워드 작업 가능',
    latitude: 36.7677,
    longitude: 127.0744,
    isFavorite: false,
  },
  {
    id: 39,
    name: '디지털 정보실 (학술정보관)',
    category: 'library',
    building: '백석학술정보관',
    floor: '2층',
    hours: '평일 09:00-21:00 (학기 중)',
    description: '검색 및 워드 작업 가능',
    contact: '041-620-9613',
    latitude: 36.7675,
    longitude: 127.0752,
    isFavorite: false,
  },
];

type View = 'map' | 'favorites' | 'settings';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('map');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleFacilityClick = (facility: Facility) => {
    setSelectedFacility(facility);
  };

  return (
    <div className="h-screen flex flex-col bg-[#FAFBFC]">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {currentView === 'map' && (
          <MapView
            onFacilityClick={handleFacilityClick}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}
        {currentView === 'favorites' && (
          <FavoritesList onFacilityClick={handleFacilityClick} />
        )}
        {currentView === 'settings' && <SettingsView />}
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-100">
        <div className="flex items-center justify-around h-16">
          <button
            onClick={() => setCurrentView('map')}
            className={`flex flex-col items-center justify-center gap-1 w-20 h-full transition-colors ${
              currentView === 'map'
                ? 'text-[#005BAC]'
                : 'text-gray-400'
            }`}
          >
            <Map className="w-5 h-5" strokeWidth={currentView === 'map' ? 2.5 : 2} />
            <span className="text-xs">지도</span>
          </button>

          <button
            onClick={() => setCurrentView('favorites')}
            className={`flex flex-col items-center justify-center gap-1 w-20 h-full transition-colors ${
              currentView === 'favorites'
                ? 'text-[#005BAC]'
                : 'text-gray-400'
            }`}
          >
            <Heart className="w-5 h-5" strokeWidth={currentView === 'favorites' ? 2.5 : 2} />
            <span className="text-xs">즐겨찾기</span>
          </button>

          <button
            onClick={() => setCurrentView('settings')}
            className={`flex flex-col items-center justify-center gap-1 w-20 h-full transition-colors ${
              currentView === 'settings'
                ? 'text-[#005BAC]'
                : 'text-gray-400'
            }`}
          >
            <Settings className="w-5 h-5" strokeWidth={currentView === 'settings' ? 2.5 : 2} />
            <span className="text-xs">설정</span>
          </button>
        </div>
      </nav>

      {/* Facility Detail Sheet */}
      <FacilityDetailSheet
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </div>
  );
}
