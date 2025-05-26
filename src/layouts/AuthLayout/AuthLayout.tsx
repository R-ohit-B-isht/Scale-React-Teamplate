import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-logo">My App</div>
        <div className="auth-content">
          {children}
        </div>
        <div className="auth-footer">
          <p>&copy; 2025 My App. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
