import React from 'react';
import { Mail, MapPin, CheckCircle, XCircle } from 'lucide-react';

const UsersTable = () => {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', location: 'São Paulo, BR', status: 'active', purchases: 12 },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', location: 'Rio de Janeiro, BR', status: 'active', purchases: 8 },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', location: 'Belo Horizonte, BR', status: 'inactive', purchases: 3 },
    { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', location: 'Curitiba, BR', status: 'active', purchases: 15 },
    { id: 5, name: 'Carlos Souza', email: 'carlos@email.com', location: 'Porto Alegre, BR', status: 'active', purchases: 6 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-purple-500/20">
            <th className="pb-4 text-gray-300 font-semibold">Usuário</th>
            <th className="pb-4 text-gray-300 font-semibold">Email</th>
            <th className="pb-4 text-gray-300 font-semibold">Localização</th>
            <th className="pb-4 text-gray-300 font-semibold">Compras</th>
            <th className="pb-4 text-gray-300 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr 
              key={user.id} 
              className="border-b border-purple-500/10 hover:bg-white/5 transition-colors"
            >
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{user.name}</span>
                </div>
              </td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} />
                  {user.email}
                </div>
              </td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  {user.location}
                </div>
              </td>
              <td className="py-4">
                <span className="text-white font-semibold">{user.purchases}</span>
              </td>
              <td className="py-4">
                {user.status === 'active' ? (
                  <span className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">
                    <CheckCircle size={16} />
                    Ativo
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-red-400 bg-red-500/10 px-3 py-1 rounded-full w-fit">
                    <XCircle size={16} />
                    Inativo
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
