import { keyframes } from '@emotion/react';

export const fadeInFromTop = keyframes`
	from {
		transform: translateY(-20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;
