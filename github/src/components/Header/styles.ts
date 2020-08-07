import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--header);
    padding: 11px 16px;
`

export const SearchForm = styled.form`
    padding-left: 16px;
    width: 100%;

    input {
        background: var(--search);
        outline: 0;
        border-radius: 6px;
        padding: 7px 12px;
        width: 100%;

        &:focus {
            width: 318px;
        }

        transition: width 0.2s ease-out, color 0.2s ease-out;
    }
`
