import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Facility } from '../App';
import { 
  Clock, 
  MapPin, 
  Navigation, 
  Heart, 
  Share2,
  Building2,
  Info,
  Phone
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface FacilityDetailSheetProps {
  facility: Facility | null;
  onClose: () => void;
}

const categoryLabels = {
  cafe: '카페',
  restaurant: '식당',
  library: '도서관',
  atm: 'ATM',
  convenience: '편의점',
  medical: '의무실',
  gym: '체육관',
  lounge: '휴게실',
  transport: '통학버스',
};

export function FacilityDetailSheet({ facility, onClose }: FacilityDetailSheetProps) {
  if (!facility) return null;

  const handleGetDirections = () => {
    console.log('길찾기:', facility.name);
  };

  const handleToggleFavorite = () => {
    console.log('즐겨찾기 토글:', facility.name);
  };

  const handleShare = () => {
    console.log('공유:', facility.name);
  };

  return (
    <Sheet open={!!facility} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[80vh] p-0 rounded-t-3xl border-0">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>{facility.name}</SheetTitle>
            <SheetDescription>
              {facility.building} {facility.floor} - {categoryLabels[facility.category]}
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <div className="h-full flex flex-col">
          {/* Image */}
          <div className="relative h-52 bg-gradient-to-br from-[#005BAC]/5 to-gray-50">
            {facility.image ? (
              <ImageWithFallback
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="w-14 h-14 text-[#005BAC]/20" strokeWidth={1.5} />
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="absolute top-5 right-5 flex gap-2">
              <button
                onClick={handleToggleFavorite}
                className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
              >
                <Heart className={`w-4.5 h-4.5 ${facility.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} strokeWidth={2} />
              </button>
              <button
                onClick={handleShare}
                className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
              >
                <Share2 className="w-4.5 h-4.5 text-gray-600" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto bg-white">
            <div className="px-6 py-6 space-y-6">
              {/* Header */}
              <div className="space-y-2.5">
                <h2 className="text-gray-900 text-xl">{facility.name}</h2>
                <Badge variant="secondary" className="bg-[#005BAC]/10 text-[#005BAC] hover:bg-[#005BAC]/10 text-xs px-2.5 py-0.5">
                  {categoryLabels[facility.category]}
                </Badge>
              </div>

              {/* Info */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-4.5 h-4.5 text-gray-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs text-gray-500 mb-1.5">위치</p>
                    <p className="text-gray-900 text-sm">{facility.building} {facility.floor}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4.5 h-4.5 text-gray-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs text-gray-500 mb-1.5">운영시간</p>
                    <p className="text-gray-900 text-sm">{facility.hours}</p>
                  </div>
                </div>

                {facility.contact && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4.5 h-4.5 text-gray-600" strokeWidth={2} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-gray-500 mb-1.5">연락처</p>
                      <a href={`tel:${facility.contact}`} className="text-gray-900 text-sm hover:text-[#005BAC]">{facility.contact}</a>
                    </div>
                  </div>
                )}

                {facility.description && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Info className="w-4.5 h-4.5 text-gray-600" strokeWidth={2} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-gray-500 mb-1.5">상세정보</p>
                      <p className="text-gray-900 text-sm leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="px-6 py-5 bg-white border-t border-gray-100">
            <Button
              onClick={handleGetDirections}
              className="w-full h-12 bg-[#005BAC] hover:bg-[#004a8f] text-white rounded-xl text-sm"
            >
              <Navigation className="w-4.5 h-4.5 mr-2" strokeWidth={2} />
              길찾기
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
