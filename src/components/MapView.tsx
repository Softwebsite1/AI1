import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { MapPin, Crosshair } from 'lucide-react';
import { facilities, Facility } from '../App';

interface MapViewProps {
  onFacilityClick: (facility: Facility) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function MapView({ onFacilityClick, selectedCategory, onCategoryChange }: MapViewProps) {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const filteredFacilities =
    selectedCategory === 'all'
      ? facilities
      : facilities.filter((f) => f.category === selectedCategory);

  return (
    <div className="h-full flex flex-col bg-[#FAFBFC]">
      {/* Header */}
      <div className="bg-white px-5 pt-4 pb-5 space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#005BAC] text-lg tracking-tight">Campus Compass</h1>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Category Filter */}
        <div className="-mx-5">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 px-5 pt-4 pb-6">
        <div className="relative h-full bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* 네이버 지도 API 연동 영역 */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center space-y-3 p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#005BAC]/5 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#005BAC]/40" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm text-gray-600 mb-1">네이버 지도 API 연동 영역</h3>
                <p className="text-xs text-gray-400">
                  실제 지도가 표시됩니다
                </p>
              </div>
            </div>
          </div>

          {/* Facility Markers (샘플) */}
          <div className="absolute inset-0 pointer-events-none">
            {filteredFacilities.map((facility, index) => (
              <button
                key={facility.id}
                onClick={() => onFacilityClick(facility)}
                className="absolute pointer-events-auto"
                style={{
                  left: `${30 + index * 15}%`,
                  top: `${40 + index * 10}%`,
                }}
              >
                <div className="relative group">
                  <div className="w-9 h-9 rounded-full bg-[#005BAC] shadow-md flex items-center justify-center transform transition-transform hover:scale-110 active:scale-95">
                    <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Current Location Button */}
          <button className="absolute bottom-5 right-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow active:scale-95 border border-gray-100">
            <Crosshair className="w-5 h-5 text-[#005BAC]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
