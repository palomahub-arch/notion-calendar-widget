import React, { useState, useEffect } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(timer);
  }, []);

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const weekDay = weekDays[currentDate.getDay()];
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
      fontFamily: '"Playfair Display", serif',
      padding: '40px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;600&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .calendar-container {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .day-number {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .detail-item {
          animation: slideIn 0.6s ease-out backwards;
        }
      `}</style>
      
      <div className="calendar-container" style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)',
        borderRadius: '32px',
        padding: '60px 50px',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)',
        maxWidth: '480px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}/>
        
        {/* Header - Dia da Semana */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#6366f1',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontFamily: '"Poppins", sans-serif',
            marginBottom: '8px'
          }}>
            {weekDay}
          </div>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
            margin: '0 auto'
          }}/>
        </div>

        {/* Número do Dia - Destaque Principal */}
        <div className="day-number" style={{
          textAlign: 'center',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '140px',
            fontWeight: '900',
            lineHeight: '1',
            background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-4px',
            textShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}>
            {day}
          </div>
        </div>

        {/* Mês e Ano */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '8px',
            letterSpacing: '1px'
          }}>
            {month}
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: '400',
            color: '#64748b',
            fontFamily: '"Poppins", sans-serif'
          }}>
            {year}
          </div>
        </div>

        {/* Hora */}
        <div style={{
          textAlign: 'center',
          paddingTop: '30px',
          borderTop: '2px solid #e2e8f0',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="detail-item" style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#6366f1',
            fontFamily: '"Poppins", sans-serif',
            letterSpacing: '2px',
            animationDelay: '0.2s'
          }}>
            {hours}:{minutes}
          </div>
        </div>

        {/* Bottom decoration */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)',
          borderRadius: '0 0 32px 32px'
        }}/>
      </div>
    </div>
  );
}

export default App;
