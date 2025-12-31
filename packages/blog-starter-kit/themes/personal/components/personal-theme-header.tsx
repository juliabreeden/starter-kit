import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, XSVG } from './icons'; // Social icons
import { ToggleTheme } from './toggle-theme';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const PersonalHeader = () => {
	const { publication } = useAppContext();

	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 2);
	const hiddenItems = navbarItems.slice(2);

	const navList = (
		<ul className="flex list-none flex-row items-center gap-5 text-sm font-medium text-neutral-600 dark:text-neutral-300">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-pink-600 dark:hover:text-pink-400"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">
								More
							</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="flex flex-col items-stretch gap-1 rounded-lg border bg-white p-2 text-sm font-medium text-neutral-600 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
								sideOffset={5}
								align="end"
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full rounded px-3 py-2 transition-colors hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950 dark:hover:text-pink-400"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	const hasNavItems = visibleItems.length > 0 || hiddenItems.length > 0;
	const { links } = publication;
	const hasSocialLinks = links?.twitter || links?.github || links?.linkedin || links?.hashnode;

	const socialLinks = (
		<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
			{links?.twitter && (
				<a
					href={links.twitter}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
					className="transition-colors hover:text-pink-600 dark:hover:text-pink-400"
				>
					<XSVG className="h-5 w-5" />
				</a>
			)}
			{links?.github && (
				<a
					href={links.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					className="transition-colors hover:text-pink-600 dark:hover:text-pink-400"
				>
					<GithubSVG className="h-5 w-5" />
				</a>
			)}
			{links?.linkedin && (
				<a
					href={links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="transition-colors hover:text-pink-600 dark:hover:text-pink-400"
				>
					<LinkedinSVG className="h-5 w-5" />
				</a>
			)}
			{links?.hashnode && (
				<a
					href={links.hashnode}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Hashnode"
					className="transition-colors hover:text-pink-600 dark:hover:text-pink-400"
				>
					<HashnodeSVG className="h-5 w-5" />
				</a>
			)}
		</div>
	);

	return (
		<header className="flex flex-col gap-6 pb-6">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
				<Link
					className="group flex flex-col items-center gap-4 sm:flex-row sm:items-start"
					href="/"
					aria-label={`${publication.author.name}'s blog home page`}
				>
					{publication.author.profilePicture && (
						<img
							className="block h-20 w-20 rounded-full ring-4 ring-pink-200 ring-offset-2 transition-all group-hover:ring-pink-400 dark:ring-pink-800 dark:ring-offset-neutral-950 dark:group-hover:ring-pink-600"
							alt={publication.author.name}
							src={resizeImage(publication.author.profilePicture, {
								w: 400,
								h: 400,
								c: 'face',
							})}
						/>
					)}
					<div className="flex flex-col gap-2 text-center sm:text-left">
						<h1 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
							{publication.title}
						</h1>
						{publication.descriptionSEO && (
							<p className="max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
								{publication.descriptionSEO}
							</p>
						)}
					</div>
				</Link>
				<div className="flex items-center justify-center gap-4 sm:justify-end">
					{hasSocialLinks && socialLinks}
					<ToggleTheme className="shrink-0" />
				</div>
			</div>
			{hasNavItems && (
				<nav className="border-t border-pink-100 pt-4 dark:border-neutral-800">{navList}</nav>
			)}
		</header>
	);
};
