import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

export interface Role {
    id: string;
    name: string;
    description: string;
    icon?: React.ElementType;
}

interface ProjectLoginProps {
    projectName: string;
    projectDescription?: string;
    roles: Role[];
    onLogin: (roleId: string) => void;
    logo?: string;
}

export default function ProjectLogin({ projectName, projectDescription, roles, onLogin, logo }: ProjectLoginProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
            <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row min-h-[500px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Side: Project Info */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-20 pointer-events-none" />

                    <div className="relative z-10">
                        {logo && (
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-20 h-20 mb-8 bg-white rounded-2xl p-3 shadow-lg flex items-center justify-center"
                            >
                                <img src={logo} alt={projectName} className="w-full h-full object-contain" />
                            </motion.div>
                        )}
                        <motion.h2
                            className="text-4xl font-bold mb-6 leading-tight"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {projectName}
                        </motion.h2>
                        <motion.p
                            className="text-slate-300 text-lg leading-relaxed"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {projectDescription || 'Select a role to explore the project demo.'}
                        </motion.p>
                    </div>

                    <motion.div
                        className="relative z-10 text-sm text-slate-400 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        * This is a simulated demo environment.
                    </motion.div>
                </div>

                {/* Right Side: Role Selection */}
                <div className="p-10 md:w-3/5 bg-white flex flex-col justify-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h3>
                        <p className="text-gray-500 mb-8">체험할 역할을 선택해주세요</p>
                    </motion.div>

                    <div className="space-y-4">
                        {roles.map((role, index) => {
                            const Icon = role.icon || User;
                            return (
                                <motion.button
                                    key={role.id}
                                    onClick={() => onLogin(role.id)}
                                    className="w-full flex items-center p-5 border border-gray-200 rounded-xl hover:border-slate-600 hover:shadow-md transition-all group text-left bg-white hover:bg-slate-50"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-hover:bg-slate-800 group-hover:text-white transition-colors mr-5 shrink-0">
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-gray-800 text-lg group-hover:text-slate-900">{role.name}</div>
                                        <div className="text-sm text-gray-500 group-hover:text-gray-600">{role.description}</div>
                                    </div>
                                    <ArrowRight className="text-gray-300 group-hover:text-slate-800 transition-colors" size={20} />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
