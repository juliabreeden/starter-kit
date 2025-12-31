import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="from-warm-50 min-h-screen bg-gradient-to-b via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950">
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
