import DemoLayout from '../../components/DemoLayout';
import MobileFrame from '../../components/MobileFrame';
import { motion } from 'framer-motion';
import { Users, Map, HeartHandshake, User, Shield, MapPin, Trophy, MessageSquare } from 'lucide-react';
import khLogo from '../../assets/logos/k-hackathon.png';
import ProjectLogin, { type Role } from '../../components/ProjectLogin';
import { useState } from 'react';

const ROLES: Role[] = [
  { id: 'user', name: '주민 (User)', description: '지역 이벤트 탐색 및 미션 참여', icon: User },
  { id: 'admin', name: '관리자 (Admin)', description: '지역 행사 등록 및 통계 관리', icon: Shield },
];

interface Mission {
  id: number;
  title: string;
  points: number;
  completed: boolean;
}

interface TownEvent {
  id: number;
  title: string;
  category: string;
  distance: string;
  participants: number;
}

const MOCK_MISSIONS: Mission[] = [
  { id: 1, title: '동네 공원 플로깅 참여하기', points: 500, completed: false },
  { id: 2, title: '지역 카페 리뷰 남기기', points: 100, completed: true },
  { id: 3, title: '이웃 환영 인사 건네기', points: 50, completed: false },
];

const MOCK_EVENTS: TownEvent[] = [
  { id: 1, title: '주말 벼룩시장', category: 'Market', distance: '300m', participants: 12 },
  { id: 2, title: '아침 독서 모임', category: 'Meetup', distance: '1.2km', participants: 5 },
  { id: 3, title: '마을 반상회', category: 'Official', distance: '500m', participants: 24 },
];

export default function KHackathonDemo() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'mission'>('map');
  const [missions, setMissions] = useState(MOCK_MISSIONS);

  const handleCompleteMission = (id: number) => {
    setMissions(prev => prev.map(m => m.id === id ? { ...m, completed: true } : m));
  };

  if (!userRole) {
    return (
      <ProjectLogin
        projectName="first-step-town"
        projectDescription="지역 커뮤니티 활성화를 위한 게이미피케이션 기반 타운 플랫폼"
        roles={ROLES}
        onLogin={setUserRole}
        logo={khLogo}
      />
    );
  }

  return (
    <DemoLayout
      title="first-step-town"
      description={`현재 '${userRole === 'user' ? '주민' : '관리자'}' 모드로 탐색 중입니다.`}
    >
      <div className="flex justify-center mb-4">
        <button onClick={() => setUserRole(null)} className="text-sm text-gray-500 hover:text-primary-600 underline">
          로그인 화면으로 돌아가기
        </button>
      </div>

      <MobileFrame title="My Town">
        <div className="h-full bg-gray-50 flex flex-col">
          {/* Header */}
          <div className="bg-white p-4 shadow-sm z-10">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary-600" size={20} />
                <span className="font-bold text-gray-800">성수동 2가</span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full text-xs font-bold text-yellow-700">
                <Trophy size={12} /> 1,250 P
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'map' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setActiveTab('map')}
              >
                타운 맵
              </button>
              <button
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'mission' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setActiveTab('mission')}
              >
                오늘의 미션
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {activeTab === 'map' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {/* Mock Map Area */}
                <div className="bg-blue-50 rounded-xl h-48 border-2 border-blue-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <Map className="text-blue-300 mb-2" size={48} />
                  <span className="text-blue-400 font-bold text-sm">Interactive Map Area</span>

                  {/* Mock Pins */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 bg-white p-1 rounded-full shadow-md text-red-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin size={16} fill="currentColor" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-1/3 right-1/3 bg-white p-1 rounded-full shadow-md text-primary-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  >
                    <MapPin size={16} fill="currentColor" />
                  </motion.div>
                </div>

                <h3 className="font-bold text-gray-800">내 주변 소식</h3>
                <div className="space-y-3">
                  {MOCK_EVENTS.map((evt) => (
                    <div key={evt.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                      <div>
                        <div className="text-xs text-primary-600 font-bold mb-0.5">{evt.category}</div>
                        <div className="font-bold text-gray-800">{evt.title}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin size={10} /> {evt.distance} · <Users size={10} /> {evt.participants}명 참여 중
                        </div>
                      </div>
                      <button className="bg-gray-50 p-2 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                        <HeartHandshake size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-4 text-white shadow-lg">
                  <div className="text-sm opacity-90 mb-1">이번 주 달성률</div>
                  <div className="text-3xl font-bold mb-3">65%</div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[65%] rounded-full"></div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 mt-6">도전 과제</h3>
                <div className="space-y-3">
                  {missions.map((mission) => (
                    <div key={mission.id} className={`bg-white p-4 rounded-xl shadow-sm border-2 transition-all ${mission.completed ? 'border-green-100 bg-green-50/30' : 'border-gray-100'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className={mission.completed ? 'opacity-50' : ''}>
                          <div className="font-bold text-gray-800">{mission.title}</div>
                          <div className="text-xs text-primary-600 font-bold mt-1">+{mission.points} P</div>
                        </div>
                        {mission.completed ? (
                          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold">완료됨</span>
                        ) : (
                          <button
                            onClick={() => handleCompleteMission(mission.id)}
                            className="bg-primary-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold hover:bg-primary-700 active:scale-95 transition-all"
                          >
                            참여하기
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Nav */}
          <div className="bg-white border-t border-gray-200 p-3 flex justify-around text-gray-400">
            <button className="flex flex-col items-center gap-1 text-primary-600"><Map size={20} /><span className="text-[10px]">홈</span></button>
            <button className="flex flex-col items-center gap-1 hover:text-gray-600"><MessageSquare size={20} /><span className="text-[10px]">채팅</span></button>
            <button className="flex flex-col items-center gap-1 hover:text-gray-600"><Users size={20} /><span className="text-[10px]">모임</span></button>
            <button className="flex flex-col items-center gap-1 hover:text-gray-600"><User size={20} /><span className="text-[10px]">MY</span></button>
          </div>
        </div>
      </MobileFrame>
    </DemoLayout>
  );
}
