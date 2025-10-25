import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, icon, trend, color }) => {
  const colorClasses = {
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30'
  };

  const iconColors = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${iconColors[color]} bg-white/10 p-3 rounded-xl`}>
          {icon}
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
          <TrendingUp size={16} />
          {trend}
        </div>
      </div>
      
      <h3 className="text-gray-300 text-sm font-medium mb-2">{title}</h3>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );
};

export default MetricCard;