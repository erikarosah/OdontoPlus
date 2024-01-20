import * as S from './styles';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
	return (
		<S.Container id="contact">
			<S.Content>		
				<h2>Odontoplus, <br/> siga nossas redes sociais! </h2>		
				<div> Serviços
					<li>Restauração</li>
					<li>Estética</li>
					<li>Prótese</li>
					<li>Prótese</li>
					<li>Canal</li>
				</div>

				<div> Contato
					<li>Av Lorem ipsum, n° 150, Lorem ipsum</li>
					<li>CEP: 00.000-000 - Cidade - Lorem ipsum</li>
					<li>CNPJ: 00.000.000/0000-00</li>
					<li>Segunda a sexta-feira das 08h às 17h horário de Brasília</li>
				</div>
			</S.Content>
			<S.SocialMedias>
				<FaFacebook/>
				<FaInstagramSquare/>
			</S.SocialMedias>
			<p>Copyright 2023 - Developed by Erika Rosa
				<a href='https://www.linkedin.com/in/erika-rosa-19a4361b1/'> <FaLinkedin/> </a>
				<a href='https://github.com/erikarosah' > <FaGithub/> </a>
			</p>
		</S.Container>
	);
}