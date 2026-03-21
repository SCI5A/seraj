import { Award, CheckCircle, Shield, Zap } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: 'معتمد دولياً',
      description: 'UL و LPCB',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'ضمان شامل',
      description: 'حتى 5 سنوات',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'أداء عالي',
      description: 'موثوقية 99.9%',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: CheckCircle,
      title: 'دعم 24/7',
      description: 'فريق متخصص',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${badge.color} text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group`}
        >
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <badge.icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-1">{badge.title}</h3>
            <p className="text-sm opacity-90">{badge.description}</p>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      ))}
    </div>
  );
}
