import * as S from './styles';
import WhatsappImage from '../../assets/whatsapp.webp';


export function WhatsappButton() {
	return (
		<S.Container>
			<img
				src={WhatsappImage}
				alt='whatsapp'
			/>
		</S.Container>
	);
}
