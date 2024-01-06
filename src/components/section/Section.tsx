import * as S from './styles';

interface SectionProps {
	title: string,
	text: string,
}

export function Section({title, text}: SectionProps) {
	return (
		<S.Container>
			<header>
				<S.Title>{title}</S.Title>
				<p>{text}</p>
			</header>
		</S.Container>
	);
}
