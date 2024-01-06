import { ReactElement } from 'react';
import * as S from './styles';

interface SectionProps {
	title: string,
	text: string,
	children: ReactElement
}

export function Section({title, text, children}: SectionProps) {
	return (
		<S.Container>
			<header>
				<S.Title>{title}</S.Title>
				<p>{text}</p>
			</header>
			<S.Content>
				{children}
			</S.Content>
		</S.Container>
	);
}
