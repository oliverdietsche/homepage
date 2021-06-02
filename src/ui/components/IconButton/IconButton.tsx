import Link from 'next/link';
import { Icon } from '../Icon/Icon';

export interface IIconButtonProps {
	icon: TIcon;
	href: string;
	fill?: string;
	hoverFill?: string;
}

export function IconButton({ icon, href, fill, hoverFill }: IIconButtonProps) {
	return (
		<Link href={href}>
			<a>
				<Icon icon={icon} fill={fill} hoverFill={hoverFill} />
			</a>
		</Link>
	);
}
