import { trpc } from '../utils/trpc';

export default function IndexPage() {
	const helloQuery = trpc.hello.useQuery();
	console.log(helloQuery.data);
	return (
		<div>
			<p>{helloQuery?.data || 'No Data'}</p>
		</div>
	);
}
