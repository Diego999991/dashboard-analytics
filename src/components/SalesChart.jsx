import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SalesChart = ({ type = 'line' }) => {
  const lineData = [
    { month: 'Jan', vendas: 4000, usuarios: 2400 },
    { month: 'Fev', vendas: 3000, usuarios: 1398 },
    { month: 'Mar', vendas: 2000, usuarios: 9800 },
    { month: 'Abr', vendas: 2780, usuarios: 3908 },
    { month: 'Mai', vendas: 1890, usuarios: 4800 },
    { month: 'Jun', vendas: 2390, usuarios: 3800 },
    { month: 'Jul', vendas: 3490, usuarios: 4300 },
  ];

  const pieData = [
    { name: 'Produtos', value: 45 },
    { name: 'Serviços', value: 30 },
    { name: 'Assinaturas', value: 15 },
    { name: 'Outros', value: 10 },
  ];

  const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#10b981'];

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
        <XAxis 
          dataKey="month" 
          stroke="#9ca3af"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#9ca3af"
          style={{ fontSize: '12px' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend 
          wrapperStyle={{ color: '#fff' }}
        />
        <Line 
          type="monotone" 
          dataKey="vendas" 
          stroke="#8b5cf6" 
          strokeWidth={3}
          dot={{ fill: '#8b5cf6', r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line 
          type="monotone" 
          dataKey="usuarios" 
          stroke="#06b6d4" 
          strokeWidth={3}
          dot={{ fill: '#06b6d4', r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;