import { ReactNode } from 'react';
import { useAuth } from '@hooks/useAuth';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  return (
    <div className="main-layout">
      <header className="header">
        <div className="logo">My App</div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <div className="user-menu">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
