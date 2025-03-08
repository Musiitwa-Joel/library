import { BrowserRouter } from 'react-router-dom';
import { HomeScreen } from '@/components/HomeScreen';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <HomeScreen />
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;