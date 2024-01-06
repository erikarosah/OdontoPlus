import { useOpenMenuContext } from '../../context/openMenu';
import * as S from './styles';
import { IoMdClose } from 'react-icons/io';

export function SideMenu() {
	const { openMenu, handleMenu } = useOpenMenuContext();

	return (
		<S.Container openmenu={openMenu}>
			<ul>
				<li>Sobre nós</li>
				<li>Tratamentos</li>
				<li>Contato</li>
			</ul>

			<S.CloseMenu onClick={handleMenu}>
				<IoMdClose/>
			</S.CloseMenu>
		</S.Container>
	);
}
