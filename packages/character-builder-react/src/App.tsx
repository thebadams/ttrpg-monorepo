import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './utils/trpc';
import { httpBatchLink } from '@trpc/client';
import IndexPage from './pages/IndexPage';
import CharacterDisplay from './components/CharacterDisplay';

function App() {
	const [count, setCount] = useState(0);
	//const [classes, setClasses] = useState([]);
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() => {
		return trpc.createClient({
			links: [
				httpBatchLink({
					url: 'http://localhost:8000/trpc',
				}),
			],
		});
	});
	// useEffect(() => {

	// })
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{/* <IndexPage /> */}
				<CharacterDisplay />
			</QueryClientProvider>
		</trpc.Provider>
	);
}

export default App;
