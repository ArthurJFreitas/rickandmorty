import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import CharacterCard from '../../components/CharacterCard';
import { Section } from '../../components/CharacterCard/styled';
import {
  CharactesResult,
  getAllCharacters,
  Info,
} from '../../services/characters';
import * as S from './styled';

interface Pagination {
  page: number;
}

export default function Home() {
  const [pagination, setPagination] = useState<Pagination>({ page: 1 });
  const [characters, setCharacters] = useState<CharactesResult[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);
  const [loading, setLoading] = useState(false);

  async function fetchCharacters() {
    setLoading(true);
    try {
      const { data } = await getAllCharacters(pagination);
      setCharacters(data.results);
      setInfo(data.info);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  function hanldeChangePage(type: 'prev' | 'next') {
    console.log(pagination.page, info.pages);
    if (type === 'prev') {
      if (pagination.page > 1) {
        setPagination((prevState) => ({ page: prevState.page - 1 }));
      }
    } else {
      if (pagination.page < info.pages) {
        setPagination((prevState) => ({ page: prevState.page + 1 }));
      }
    }
  }

  useEffect(() => {
    if (!loading) {
      fetchCharacters();
    }
  }, [pagination]);

  return (
    <S.Container>
      <header>
        <img
          src='https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png'
          alt='Rick and Morty Logo'
          width={400}
          height={200}
        />
      </header>
      <main>
        <S.FlexCards>
          {characters &&
            characters?.map((character) => <CharacterCard data={character} />)}
        </S.FlexCards>
        <S.ButtonWrapper>
          <div>
            <Button
              disabled={pagination.page <= 1}
              onClick={() => setPagination({ page: 1 })}
            >
              Start
            </Button>
            <Button
              disabled={pagination.page <= 1}
              onClick={() => hanldeChangePage('prev')}
            >
              Prev
            </Button>
          </div>
          <span>
            {' '}
            {pagination.page} of {info.pages}
          </span>
          <div>
            <Button
              disabled={pagination.page >= info.pages}
              onClick={() => hanldeChangePage('next')}
            >
              Next
            </Button>
            <Button
              disabled={pagination.page >= info.pages}
              onClick={() => setPagination({ page: info.pages })}
            >
              End
            </Button>
          </div>
        </S.ButtonWrapper>
      </main>
    </S.Container>
  );
}
