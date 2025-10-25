import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import MetricCard from './components/MetricCard';
import SalesChart from './components/SalesChart';
import UsersTable from './components/UsersTable';

function App() {
  const [metrics, setMetrics] = useState({
    revenue: 0,
    users: 0,
    orders: 0,
    conversion: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        revenue: Math.floor(Math.random() * 100000) + 50000,
        users: Math.floor(Math.random() * 5000) + 10000,
        orders: Math.floor(Math.random() * 1000) + 500,
        conversion: (Math.random() * 5 + 2).toFixed(2)
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <header className="bg-black/30 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <TrendingUp className="text-purple-400" size={32} />
            Analytics Dashboard
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Receita Total"
            value={`R$ ${metrics.revenue.toLocaleString()}`}
            icon={<DollarSign size={24} />}
            trend="+12.5%"
            color="green"
          />
          <MetricCard
            title="Usuários Ativos"
            value={metrics.users.toLocaleString()}
            icon={<Users size={24} />}
            trend="+8.2%"
            color="blue"
          />
          <MetricCard
            title="Pedidos"
            value={metrics.orders.toLocaleString()}
            icon={<ShoppingCart size={24} />}
            trend="+23.1%"
            color="purple"
          />
          <MetricCard
            title="Taxa de Conversão"
            value={`${metrics.conversion}%`}
            icon={<TrendingUp size={24} />}
            trend="+5.4%"
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Vendas por Mês</h2>
            <SalesChart />
          </div>

          <div className="bg-black/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Distribuição de Receita</h2>
            <SalesChart type="pie" />
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Usuários Recentes</h2>
          <UsersTable />
        </div>
      </main>

      <footer className="bg-black/30 backdrop-blur-lg border-t border-purple-500/20 mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400">
          <p>Dashboard Analytics © 2025 - Desenvolvido com React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
