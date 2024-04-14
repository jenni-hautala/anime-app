import React from 'react';
import { createSelector } from 'reselect';
import { makeSelectAnimePage } from './selectors';
import { useAppSelector } from '../../hooks';
import styled from 'styled-components';

const HotAnimeContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    `;
    
    const AnimeItemContainer = styled.div`
    width: 12em;
    height: auto;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    `;


const AnimeCover = styled.div`
    width: 100%;
    height: 14em;

    img {
        width: auto;
        height: 100%;
    }
`;

const AnimeTitle = styled.h6`
    font-size: 1.25rem;
    color: #000000;
    font-weight: 600;
    margin-top: .5rem;
    margin-bottom: 1rem;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage
}));


export function HotAnime () {
    const { animePage } = useAppSelector(stateSelector);

    const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;

    if (isEmptyAnimePage) return <div>Loading...</div>;

    return <HotAnimeContainer>
       {animePage && animePage.media && animePage.media.map((anime) => (
        <AnimeItemContainer key={anime?.id}>
            <AnimeCover>
                <img src={anime?.coverImage?.extraLarge || ""} alt={anime?.title?.english || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
            <div>Average Score: {anime?.averageScore} </div>
        </AnimeItemContainer>
       ))}
    </HotAnimeContainer>
}