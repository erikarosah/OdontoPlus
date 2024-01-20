import { useOpenMenuContext } from '../../context/openMenu';
import * as S from './styles';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

export function TopMenu() {
	const { openMenu, handleMenu } = useOpenMenuContext();

	return (
		<S.Container openmenu={openMenu}>
			<S.CloseMenu onClick={handleMenu}>
				<IoMdClose/>
			</S.CloseMenu>
			<ul>
				<li>
					Agendar consulta
				</li>
				<li>
					<Link  to="treatments" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500} >
					</Link>
					Tratamentos
				
				</li>
				<li>
					<Link  to="about-us" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500} >
					</Link>
					Sobre nós
				</li>
				<li>
					<Link  to="contact" 
						spy={true} 
						smooth={true} 
						offset={50} 
						duration={500} >
					</Link>
					Contato
				</li>
			</ul>

		</S.Container>
	);
}
