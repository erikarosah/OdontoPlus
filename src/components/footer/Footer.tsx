import * as S from './styles';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export function Footer() {
	return (
		<S.Container>
			<S.Content>
				<h2>OdontoPlus</h2>
				<div>
					<ul> Serviços
						<li>Restauração</li>
						<li>Prótese</li>
						<li>Estética</li>
						<li>Tratamento de Canal</li>
						<li>Prótese</li>
					</ul>

					<ul> Contato
						<li>Av Lorem ipsum, n° 150, Lorem ipsum</li>
						<li>CEP: 00.000-000 - Cidade - Lorem ipsum</li>
						<li>CNPJ: 00.000.000/0000-00</li>
						<li>Segunda a sexta-feira das 08h às 17h horário de Brasília</li>
					</ul>
				</div>
			</S.Content>
			<S.SocialMedias>
				<FaFacebook/>
				<FaInstagramSquare/>
			</S.SocialMedias>
			<p>Copyright 2023 - Developed by Erika Rosa</p>
		</S.Container>
	);
}
