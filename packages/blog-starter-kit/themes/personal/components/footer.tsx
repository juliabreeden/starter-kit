import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t border-pink-100 pt-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			<p>
				&copy; {new Date().getFullYear()} {publication.title}
			</p>
			<p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
				Made with care <span className="text-pink-400">♡</span>
			</p>
		</footer>
	);
};
