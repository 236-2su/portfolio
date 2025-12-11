import stalkLogo from '../assets/logos/stalk.png';
import heobyLogo from '../assets/logos/heoby.png';
import ssafyFinanceLogo from '../assets/logos/ssafy-finance.svg';
import lookeyLogo from '../assets/logos/lookey.svg';
import khackathonLogo from '../assets/logos/k-hackathon.png';
import linbookLogo from '../assets/logos/linbook_real.png';

export interface Project {
    id: number;
    name: string;
    title: string;
    logo: string;
    period: string;
    role: string;
    tech: string[];
    description: string;
    demoLink?: string;
    hasDemo: boolean;
    disabled?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: 2,
        name: 'stalk',
        title: 'Stalk - Investment Consultation Platform',
        logo: stalkLogo,
        period: '2025.07.07 - 2025.08.22 (7 weeks)',
        role: 'Frontend Developer',
        tech: ['Spring Boot', 'React', 'OpenVidu', 'WebRTC'],
        description: 'Frontend : React & WebRTC(OpenVidu) 화상 상담 기능 구현',
        demoLink: '/demo/stalk',
        hasDemo: true,
    },
    {
        id: 4,
        name: 'heoby',
        title: 'Heoby - AI Monitoring System',
        logo: heobyLogo,
        period: '2025.10.10 - 2025.11.28 (7 weeks)',
        role: 'Team Leader, Infrastructure, AI, FastAPI',
        tech: ['Spring Boot', 'React', 'YOLO', 'MediaPipe', 'MQTT'],
        description: 'Team Leader : 프로젝트 기획 및 팀 관리\nInfrastructure : Docker & Jenkins CI/CD 구축\nBackend : FastAPI & MQTT 실시간 통신 구현\nAI : YOLO & MediaPipe 모델 연동',
        demoLink: '/demo/heoby',
        hasDemo: true,
    },
    {
        id: 1,
        name: 'ssafy-finance',
        title: 'MyFin - Finance Management Platform',
        logo: ssafyFinanceLogo,
        period: '2025.05 - 2025.06',
        role: 'Team Leader, Full-Stack Developer',
        tech: ['Vue.js', 'Django', 'SQLite'],
        description: 'Team Leader : 프로젝트 기획 및 일정 관리\nFull Stack : Django & Vue.js 웹 서비스 구현',
        demoLink: '/demo/ssafy-finance',
        hasDemo: true,
    },
    {
        id: 3,
        name: 'lookey',
        title: 'LooKey - AI Product Recognition',
        logo: lookeyLogo,
        period: '2025.08.25 - 2025.10.02 (6 weeks)',
        role: 'Team Leader, Infrastructure, Backend Developer, Frontend Developer',
        tech: ['Android', 'FastAPI', 'YOLO', 'Spring Boot'],
        description: 'Team Leader : 프로젝트 기획 및 팀 관리\nInfrastructure : Docker & Jenkins CI/CD 구축\nBackend : Spring Boot API 설계 및 구현\nFrontend : Android 앱 개발',
        demoLink: '/demo/lookey',
        hasDemo: true,
    },
    {
        id: 5,
        name: 'linbook',
        title: 'Lin.book - Club Ledger Management',
        logo: linbookLogo,
        period: '2025 Shinhan Hackathon',
        role: 'Team Leader, Backend Developer, Infrastructure, Frontend Developer, Database',
        tech: ['Django', 'Android (Kotlin)', 'SQLite'],
        description: 'Team Leader : 프로젝트 기획 및 팀 관리\nInfrastructure : AWS EC2 배포\nBackend : Django REST API 개발\nFrontend : Android(Kotlin) 앱 구현\nDatabase : SQLite 설계 및 최적화',
        demoLink: '/demo/linbook',
        hasDemo: true,
    },
    {
        id: 6,
        name: 'k-hackathon',
        title: 'first-step-town',
        logo: khackathonLogo,
        period: '2025 K-Hackathon (13th)',
        role: 'Backend Developer, Zep Script, React Developer',
        tech: ['Spring Boot', 'React', 'MySQL', 'Zep Script'],
        description: 'Backend : Spring Boot & MySQL 서버 구축\nFrontend : React & Zep Script 메타버스 연동',
        demoLink: '/demo/k-hackathon',
        hasDemo: true,
        disabled: true,
    },
];
