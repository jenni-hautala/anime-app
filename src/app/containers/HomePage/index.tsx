import React, { useEffect } from 'react';
import styled from 'styled-components';
import animeService from '../../services/animeService';
import type { Dispatch } from 'redux';
import { setAnimePage } from './homePageSlice';
import type { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { useAppDispatch } from '../../hooks';
import { HotAnime } from './hotAnime';

interface IHomePageProps {

}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
});

export const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 15).catch((error) => {
      console.log("Error: ", error);
    });

    console.log("Anime page: ", animePage);
    if(animePage) {
      setAnimePage(animePage);
    }
  }

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
};
function dispatch(arg0: { payload: any; type: "homePage/setAnimePage"; }) {
  throw new Error('Function not implemented.');
}

