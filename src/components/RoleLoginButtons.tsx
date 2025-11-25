import { motion } from 'framer-motion';
import { User, UserCog, Shield } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  icon: typeof User;
  color: string;
  description: string;
}

interface RoleLoginButtonsProps {
  onLogin: (role: string) => void;
  roles?: Role[];
}

const defaultRoles: Role[] = [
  {
    id: 'user',
    name: 'User',
    icon: User,
    color: 'from-blue-600 to-cyan-600',
    description: 'Regular user access',
  },
  {
    id: 'expert',
    name: 'Expert',
    icon: UserCog,
    color: 'from-purple-600 to-pink-600',
    description: 'Expert/Professional access',
  },
  {
    id: 'admin',
    name: 'Admin',
    icon: Shield,
    color: 'from-orange-600 to-red-600',
    description: 'Administrator access',
  },
];

export default function RoleLoginButtons({ onLogin, roles = defaultRoles }: RoleLoginButtonsProps) {
  return (
    <div className="card p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Select Role to Experience Demo
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Choose a role to explore the application with different permissions
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.button
              key={role.id}
              className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${role.color} text-white shadow-lg hover:shadow-2xl transition-all`}
              onClick={() => onLogin(role.id)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />

              <div className="relative z-10">
                <Icon className="w-12 h-12 mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-2">{role.name}</h4>
                <p className="text-sm opacity-90">{role.description}</p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
            </motion.button>
          );
        })}
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        💡 This is a demo portfolio. No actual authentication required.
      </p>
    </div>
  );
}
