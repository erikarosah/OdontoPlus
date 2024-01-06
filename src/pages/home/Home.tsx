import * as S from './styles';
import Banner from '../../assets/banner.jpg';
import { Section } from '../../components/section/Section';
import { Services } from '../../components/services/Services';
import { AboutUs } from '../../components/aboutUs/AboutUs';
import { WhatsappButton } from '../../components/whatsappButton/whatsappButton';
import { Footer } from '../../components/footer/Footer';
import { SideMenu } from '../../components/sideMenu/sideMenu';

export function Home() {
	return (
		<S.Container>
			<SideMenu/>
			<S.Content>
				<p>OdontoPlus, preparando <br/> o seu melhor sorriso!</p>
				<S.Banner
					src={Banner}
					alt=''
				/>
			</S.Content>

			<Section
				title='Tratamentos'
				text='Conheça tudo que nossa clínica oferece para cuidar de você e do seu sorriso.'
			/>

			<Services/>
			<AboutUs/>
			<Footer/>
			<WhatsappButton/>
		</S.Container>
	);
}