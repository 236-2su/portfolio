import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { ChevronLeft } from 'lucide-react';

const PostWrite = () => {
    const navigate = useNavigate();
    const { addPost, isLoggedIn } = useStalk();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('시황분석');

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">로그인이 필요한 서비스입니다.</h2>
                    <button
                        onClick={() => navigate('/demo/stalk/login')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        로그인하러 가기
                    </button>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        addPost({
            title,
            content,
            category,
            author: '나', // Mock user
        });

        navigate('/demo/stalk/knowledge');
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/demo/stalk/knowledge')}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="ml-1">취소하고 돌아가기</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8">새 글 작성하기</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                카테고리
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="시황분석">시황분석</option>
                                <option value="투자일지">투자일지</option>
                                <option value="종목토론">종목토론</option>
                                <option value="질문">질문</option>
                            </select>
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                제목
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="제목을 입력하세요"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                내용
                            </label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="내용을 입력하세요"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[400px] resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={!title.trim() || !content.trim()}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                            >
                                등록하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostWrite;
