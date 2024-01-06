import { TreatmentImages } from '../../utils/treatment-images';
import * as S from './styles';

export function Services() {
	return (
		<S.Container>
			<S.Content>
				{ TreatmentImages.map((item) => (
					<S.Images key={item.id}>
						<img
							src={item.image}
							alt=""
						/>

						<S.About>
							<h2>{item.area}</h2>
							<p>{item.description}</p>
						</S.About>
					</S.Images>
				))}
			</S.Content>
		</S.Container>
	);
}
