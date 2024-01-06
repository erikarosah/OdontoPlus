import * as S from './styles';
import ClinicImage from '../../assets/clinic.jpg';

export function AboutUs() {
	return (
		<S.Container>
			<S.Content>
				<img
					src={ClinicImage}
					alt='OdontoPlus clinic'
				/>
				<S.About>
					<S.Title>
						OdontoPlus
					</S.Title>
					<p>
						Tem uma excelente estrutura clínica que garante um tratamento
						para recuperação da sua saúde bucal, além de trazer de volta sua
						autoestima e seu sorriso!
					</p>
					<span>
						Lorem ipsum dolor sit amet. Et fuga ducimus ad itaque facere non facere expedita vel earum possimus et quisquam impedit. Eum repellendus dignissimos At voluptates alias qui omnis sunt in soluta reprehenderit sed error esse. Qui soluta velit ex commodi rerum eos voluptas minus et deserunt laboriosam. Sit labore consequatur aut voluptates cumque est cupiditate voluptas sit libero deleniti sit rerum consectetur.
						Aut possimus quasi qui illum molestiae et blanditiis tenetur aut labore perferendis ut eveniet quis. Et omnis deserunt est velit voluptatem qui iste aperiam sit voluptatem accusantium nam iusto vero vel esse rerum.
					</span>
				</S.About>
			</S.Content>
		</S.Container>
	);
}
