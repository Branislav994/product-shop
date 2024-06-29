import AppRouter from './router/AppRouter'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GlobalStyle from '../src/styles/global';
import AppLayout from './layout/AppLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </QueryClientProvider>
  )
}

export default App
