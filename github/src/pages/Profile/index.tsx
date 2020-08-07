import React from 'react'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import CalendarHeatmap from '../../components/CalendarHeatmap'

import * as S from './styles'

const Profile: React.FC = () => {
    return (
        <S.ProfileWrapper>
            <S.MainWrapper>
                <S.LeftSide>
                    <ProfileData
                        username="henriquepb22"
                        name="Henrique Pereira"
                        avatarUrl="https://avatars3.githubusercontent.com/u/14242059?v=4"
                        followers={11}
                        following={11}
                        email="henriquepbdev@gmail.com"
                        location="Caruaru/PE, Brazil"
                        site="henriquepb.me"
                    />
                </S.LeftSide>
                <S.RightSide>
                    <S.ReposWrapper>
                        <h2>Random Repositories</h2>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <RepoCard
                                    key={n}
                                    username="Henriquepb22"
                                    reponame="github-clone"
                                    description="Clone of github page"
                                    language={
                                        n % 3 === 0
                                            ? 'Javascript'
                                            : 'Typescript'
                                    }
                                    stars={200}
                                    forks={123}
                                />
                            ))}
                        </div>
                    </S.ReposWrapper>
                    <CalendarHeatmap />
                </S.RightSide>
            </S.MainWrapper>
        </S.ProfileWrapper>
    )
}

export default Profile
