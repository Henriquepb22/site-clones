import React from 'react'
import {
    RiGroupLine,
    RiBuilding4Line,
    RiMapPin2Line,
    RiMailLine,
    RiLinksLine
} from 'react-icons/ri'

import * as S from './styles'

interface Props {
    username: string
    name: string
    avatarUrl: string
    followers: number
    following: number
    company?: string
    location?: string
    email?: string
    site?: string
}

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    site
}) => {
    return (
        <S.ProfileDataWrapper>
            <S.AvatarWrapper>
                <S.AvatarImage src={avatarUrl} alt={name} />
                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </S.AvatarWrapper>

            <S.StatusList>
                <li>
                    <RiGroupLine size={16} fill="var(--icon)" />
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </S.StatusList>

            <S.InfoList>
                {company && (
                    <li>
                        <RiBuilding4Line size={16} fill="var(--icon)" />
                        <span>{company}</span>
                    </li>
                )}
                {location && (
                    <li>
                        <RiMapPin2Line size={16} fill="var(--icon)" />
                        <span>{location}</span>
                    </li>
                )}
                {email && (
                    <li>
                        <RiMailLine size={16} fill="var(--icon)" />
                        <span>{email}</span>
                    </li>
                )}
                {site && (
                    <li>
                        <RiLinksLine size={16} fill="var(--icon)" />
                        <span>{site}</span>
                    </li>
                )}
            </S.InfoList>
        </S.ProfileDataWrapper>
    )
}

export default ProfileData
