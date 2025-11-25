import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { Search, MessageSquare, Eye, PenTool } from 'lucide-react';

const Knowledge = () => {
    const navigate = useNavigate();
    const { posts, isLoggedIn, userRole } = useStalk();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const categories = [
        { id: 'ALL', label: '전체' },
        { id: '시황분석', label: '시황분석' },
        { id: '투자일지', label: '투자일지' },
        { id: '종목토론', label: '종목토론' },
        { id: '질문', label: '질문' }
    ];

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.includes(searchTerm) || post.content.includes(searchTerm);
        const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">투자 지식 iN</h1>
                        <p className="text-gray-600">전문가와 함께 나누는 깊이 있는 투자 이야기</p>
                    </div>

                    {isLoggedIn && (
                        <button
                            onClick={() => navigate('/demo/stalk/knowledge/write')}
                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            <PenTool size={18} />
                            글쓰기
                        </button>
                    )}
                </div>

                {/* Search & Filter */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.id
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        </div>
                    </div>
                </div>

                {/* Post List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <div
                                key={post.id}
                                onClick={() => navigate(`/demo/stalk/knowledge/${post.id}`)}
                                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-sm">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2 mb-4 text-sm">
                                    {post.content}
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span className="font-medium text-gray-700">{post.author}</span>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-1">
                                            <Eye size={16} />
                                            <span>{post.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageSquare size={16} />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center text-gray-500">
                            등록된 게시글이 없습니다.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
