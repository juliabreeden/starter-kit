import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<article className="group -mx-4 flex flex-col items-start gap-2 rounded-lg p-4 transition-colors hover:bg-pink-50 dark:hover:bg-neutral-900">
			<h2 className="font-heading text-xl font-semibold leading-snug text-neutral-900 group-hover:text-pink-700 dark:text-white dark:group-hover:text-pink-400">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
				<Link href={postURL}>
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<span className="text-pink-300 dark:text-pink-700">•</span>
						<Link href={postURL}>{commentCount} comments</Link>
					</>
				)}
			</p>
		</article>
	);
};
