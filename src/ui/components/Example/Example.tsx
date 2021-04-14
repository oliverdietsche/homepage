import { Typography } from '@material-ui/core';

export interface IExampleProps {
	text: string;
}

export function Example({ text }: IExampleProps) {
	return <Typography>I'm a example component: {text}</Typography>;
}
