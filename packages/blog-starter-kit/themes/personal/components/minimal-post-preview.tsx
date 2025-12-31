import { resizeImage } from '@starter-kit/utils/image';
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
	coverImage?: string | null;
	brief?: string | null;
};

export const MinimalPostPreview = ({
	title,
	date,
	slug,
	commentCount,
	coverImage,
	brief,
}: Props) => {
	const postURL = `/${slug}`;

	return (
		<article className="group -mx-4 flex flex-col gap-4 rounded-xl p-4 transition-colors hover:bg-pink-50 dark:hover:bg-neutral-900 sm:flex-row sm:items-start">
			{coverImage && (
				<Link href={postURL} className="shrink-0">
					<img
						src={resizeImage(coverImage, { w: 400, h: 225, c: 'thumb' })}
						alt={title}
						className="h-32 w-full rounded-lg object-cover sm:h-24 sm:w-40"
					/>
				</Link>
			)}
			<div className="flex flex-col gap-2">
				<h2 className="font-heading text-xl font-semibold leading-snug text-neutral-900 group-hover:text-pink-700 dark:text-white dark:group-hover:text-pink-400">
					<Link href={postURL}>{title}</Link>
				</h2>
				{brief && (
					<p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
						{brief}
					</p>
				)}
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
			</div>
		</article>
	);
};
