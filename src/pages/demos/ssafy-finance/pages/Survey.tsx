import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft } from 'lucide-react';

const surveyQuestions = [
    { question: '투자 경험이 어느 정도신가요?', options: ['초보자', '중급자', '고급자'] },
    { question: '투자 목표 기간은 얼마나 보시나요?', options: ['1년 이내', '1-3년', '3년 이상'] },
    { question: '위험 감수 성향은 어떤 편인가요?', options: ['보수적', '중립적', '공격적'] },
];

const Survey = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSsafyFinance();
    const [surveyStep, setSurveyStep] = useState(0);
    const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const handleSurveyAnswer = (answer: string) => {
        const newAnswers = [...surveyAnswers, answer];
        setSurveyAnswers(newAnswers);
        if (surveyStep < surveyQuestions.length - 1) {
            setSurveyStep(surveyStep + 1);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        className="card p-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="text-center mb-6">
                            <Sparkles className="mx-auto mb-4 text-primary-600" size={64} />
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">AI 추천 결과</h2>
                            <p className="text-gray-600">입력해주신 투자 성향에 맞는 상품을 추천드려요.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                                <h3 className="font-bold text-blue-900 mb-1">추천 예금 상품</h3>
                                <p className="text-blue-800">KB 든든한 정기예금 (최대 3.5%)</p>
                            </div>
                            <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                                <h3 className="font-bold text-purple-900 mb-1">추천 적금 상품</h3>
                                <p className="text-purple-800">신한 내일을 위한 적금 (최대 4.2%)</p>
                            </div>
                            <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                                <h3 className="font-bold text-green-900 mb-1">추천 주식</h3>
                                <p className="text-green-800">삼성전자, NAVER, 카카오</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/demo/ssafy-finance/home')}
                            className="btn-primary w-full mt-6"
                        >
                            메인으로 돌아가기
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto px-6 max-w-3xl">
                <button
                    onClick={() => navigate('/demo/ssafy-finance/home')}
                    className="mb-6 text-primary-600 hover:underline flex items-center gap-1"
                >
                    <ChevronLeft size={20} />
                    메인으로 돌아가기
                </button>

                <motion.div
                    className="card p-8"
                    key={surveyStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="mb-4 text-sm text-gray-500">
                        질문 {surveyStep + 1} / {surveyQuestions.length}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{surveyQuestions[surveyStep].question}</h2>
                    <div className="space-y-3">
                        {surveyQuestions[surveyStep].options.map((option, index) => (
                            <motion.button
                                key={index}
                                className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all"
                                onClick={() => handleSurveyAnswer(option)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Survey;
