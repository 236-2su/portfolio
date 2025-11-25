import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { ChevronLeft, MessageSquare, Eye, ThumbsUp, Share2, Trash2 } from 'lucide-react';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { posts, deletePost, userRole } = useStalk();
    const post = posts.find(p => p.id === Number(id));

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        { id: 1, author: '김철수', content: '좋은 정보 감사합니다!', date: '2024.05.20' },
        { id: 2, author: '이영희', content: '동의합니다. 저도 그렇게 생각해요.', date: '2024.05.21' }
    ]);

    if (!post) {
        return <div className="p-20 text-center">게시글을 찾을 수 없습니다.</div>;
    }

    const handleDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            deletePost(post.id);
            navigate('/demo/stalk/knowledge');
        }
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setComments([
            ...comments,
            {
                id: comments.length + 1,
                author: '나', // Mock current user
                content: comment,
                date: new Date().toLocaleDateString()
            }
        ]);
        setComment('');
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/demo/stalk/knowledge')}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="ml-1">목록으로</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
                                {post.category}
                            </span>
                            {(userRole === 'ADMIN' || post.author === '나') && (
                                <button
                                    onClick={handleDelete}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                        <div className="flex items-center justify-between text-gray-500 text-sm">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-gray-900">{post.author}</span>
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Eye size={16} />
                                    <span>{post.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare size={16} />
                                    <span>{comments.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 min-h-[300px] text-gray-800 leading-relaxed whitespace-pre-line">
                        {post.content}
                    </div>

                    {/* Actions */}
                    <div className="px-8 py-6 border-t border-gray-100 flex justify-center gap-4">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors">
                            <ThumbsUp size={18} />
                            <span>좋아요</span>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors">
                            <Share2 size={18} />
                            <span>공유하기</span>
                        </button>
                    </div>

                    {/* Comments */}
                    <div className="bg-gray-50 p-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">
                            댓글 <span className="text-blue-600">{comments.length}</span>
                        </h3>

                        {/* Comment Form */}
                        <form onSubmit={handleCommentSubmit} className="mb-8">
                            <div className="relative">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="댓글을 남겨보세요"
                                    className="w-full p-4 pr-24 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!comment.trim()}
                                    className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    등록
                                </button>
                            </div>
                        </form>

                        {/* Comment List */}
                        <div className="space-y-4">
                            {comments.map(c => (
                                <div key={c.id} className="bg-white p-4 rounded-xl border border-gray-200">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-gray-900">{c.author}</span>
                                        <span className="text-xs text-gray-500">{c.date}</span>
                                    </div>
                                    <p className="text-gray-700">{c.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
