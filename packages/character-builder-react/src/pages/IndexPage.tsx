import { trpc } from '../utils/trpc';

export default function IndexPage() {
	const helloQuery = trpc.hello.useQuery();
	const classesQuery = trpc.allClasses.useQuery();
	console.log(classesQuery);
	console.log(helloQuery.data);
	return (
		<div>
			<p>{helloQuery?.data || 'No Data'}</p>
			{classesQuery.data?.map((item) => <p>{item.name}</p>)}
		</div>
	);
}
