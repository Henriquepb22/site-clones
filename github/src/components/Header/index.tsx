import React from 'react'
import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

const Header: React.FC = () => {
    return (
        <S.HeaderWrapper>
            <FaGithub fill="var(--logo)" size={32} />
            <S.SearchForm>
                <input type="text" placeholder="Enter Username or Repo..." />
            </S.SearchForm>
        </S.HeaderWrapper>
    )
}

export default Header
