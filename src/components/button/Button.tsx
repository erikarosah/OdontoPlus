import * as S from './styles';

interface ButtonProps {
	text: string
}

export function Button({text}: ButtonProps) {
	return (
		<S.Container>
			{text}
		</S.Container>
	);
}
