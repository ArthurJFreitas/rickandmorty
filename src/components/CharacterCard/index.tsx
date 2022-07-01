import { CharactesResult } from '../../services/characters';
import * as S from './styled';

// interface CharacterCardProps {
//   id: number;
//   name?: string;
//   status?: string;
//   species?: string;
//   type?: any;
//   gender?: string;
//   image?: string;
//   location: {
//     name?: string;
//   };
//   origin?: {
//     name?: string;
//   };
// }

interface CharacterCardProps {
  data: CharactesResult;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  return (
    <S.Container>
      <S.Avatar>
        <img src={data.image} alt={data.name} />
      </S.Avatar>
      <S.Content>
        <S.Section>
          <a href='#' rel='nofollow noopener noreferrer' target='_blank'>
            <h2>{data.name}</h2>
          </a>
          <span>
            {data.status} - {data.species}
          </span>
        </S.Section>
        <S.Section>
          <strong>Last known location:</strong>
          <a href='#' rel='nofollow noopener noreferrer' target='_blank'>
            {data.location.name}
          </a>
        </S.Section>
        <S.Section>
          <strong>First seen in:</strong>
          <a href='#' rel='nofollow noopener noreferrer' target='_blank'>
            {data.origin.name}
          </a>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}
