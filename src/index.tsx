import { createRoot } from 'react-dom/client';
import UserSerach from './refs/UserSearch';
// import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <UserSerach />
    </div>
  );
};

createRoot(document.querySelector('#root')!).render(<App />);
