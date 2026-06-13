import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

// 通用卡片组件
export default function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}>
      {children}
    </div>
  );
}
