import React from 'react'
import { Link } from 'react-router-dom'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'

import * as S from './styles'

interface Props {
    username: string
    reponame: string
    description?: string
    language?: string
    stars: number
    forks: number
}

const RepoCard: React.FC<Props> = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks
}) => {
    const languageClass = language ? language.toLowerCase() : 'other'

    return (
        <S.RepoCardWrapper>
            <S.RepoDescription>
                <header>
                    <RiBookMarkLine size={16} fill="var(--icon)" />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
                <p>{description}</p>
            </S.RepoDescription>
            <S.RepoInfo>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} />
                        <span>{language}</span>
                    </li>
                    <li>
                        <RiStarLine size={16} fill="var(--icon)" />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <AiOutlineFork size={16} fill="var(--icon)" />
                        <span>{forks}</span>
                    </li>
                </ul>
            </S.RepoInfo>
        </S.RepoCardWrapper>
    )
}

export default RepoCard
