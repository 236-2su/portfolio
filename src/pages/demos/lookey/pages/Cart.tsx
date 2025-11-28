import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useLookey();

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="p-6 space-y-4 bg-white min-h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <ShoppingCart size={28} />
                                장바구니
                            </h1>
                            <Link to="/demo/lookey/home" className="text-blue-600 text-sm">
                                ← 돌아가기
                            </Link>
                        </div>

                        {cart.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500">장바구니가 비어있습니다</p>
                                <Link to="/demo/lookey/scan" className="mt-4 inline-block text-blue-600">
                                    상품 스캔하러 가기
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-3">
                                    {cart.map((item) => (
                                        <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                                <p className="text-blue-600 font-bold mt-1">
                                                    ₩ {item.price.toLocaleString()} × {item.quantity}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4 space-y-3">
                                    <div className="flex justify-between items-center text-lg">
                                        <span className="font-semibold">총 금액</span>
                                        <span className="text-2xl font-bold text-blue-600">
                                            ₩ {total.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={clearCart}
                                            className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition-colors"
                                        >
                                            전체 삭제
                                        </button>
                                        <button className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                                            결제하기
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
