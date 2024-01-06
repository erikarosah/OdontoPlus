import * as S from './styles';
import LogoImage from '../../assets/logo.png';
import { Button } from '../button/Button';

export function Header() {
	return (
		<S.Container>
			<S.Title>
				<img
					src={LogoImage}
					alt=''
				/>
                OdontoPlus
			</S.Title>
			<S.Content>
				<S.Items>Sobre nós</S.Items>
				<S.Items>Tratamentos</S.Items>
				<S.Items>Contato</S.Items>
				<Button text="Agendar consulta"/>
			</S.Content>
		</S.Container>
	);
}
