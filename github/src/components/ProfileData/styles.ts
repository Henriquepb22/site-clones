import styled from 'styled-components'

export const ProfileDataWrapper = styled.div``

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-left: 24px;

        > h1 {
            font-size: 26px;
            line-height: 1.25;
            color: var(--gray-dark);
            font-weight: 600;
        }

        > h2 {
            font-size: 20px;
            color: var(--username);
            font-weight: 300;
        }
    }

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        > div {
            margin-left: 0;
            margin-top: 16px;
        }
    }
`

export const AvatarImage = styled.img`
    width: 16%;
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 100%;
    }
`

export const StatusList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;

    > li {
        display: flex;
        align-items: center;

        > span {
            font-size: 14px;
            color: var(--gray);
        }

        > * {
            margin-right: 5px;
        }
    }
`

export const InfoList = styled.ul`
    li {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    li + li {
        margin-top: 10px;
    }

    span {
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`
