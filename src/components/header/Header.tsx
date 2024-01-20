import * as S from './styles';
import LogoImage from '../../assets/logo.png';
import { Button } from '../button/Button';
import { IoMenu } from 'react-icons/io5';
import { useOpenMenuContext } from '../../context/openMenu';
import { Link } from 'react-scroll';

export function Header() {
	const { handleMenu } = useOpenMenuContext();

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
				<S.Items>
					<Link
						to="about-us" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500}>
					</Link>
					Sobre nós
				</S.Items>

				<S.Items>
					<Link  
						to="treatments" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500} >
					</Link>
					Tratamentos
				</S.Items>

				<S.Items>
					<Link  
						to="contact" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500} >
					</Link>
					Contato
				</S.Items>
				
				<Button text="Agendar consulta"/>
			</S.Content>
			<S.Menu onClick={handleMenu}>
				<IoMenu/>
			</S.Menu>
		</S.Container>
	);
}
