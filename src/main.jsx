import { createRoot } from 'react-dom/client'

console.log('--- MAIN SCRIPT EXECUTING ---');

const root = document.getElementById('root');
if (root) {
  console.log('--- ROOT ELEMENT FOUND, RENDERING ---');
  createRoot(root).render(<h1 style={{ color: 'white', padding: '50px' }}>HELLO FROM MAIN</h1>);
} else {
  console.error('--- ROOT NOT FOUND ---');
}
