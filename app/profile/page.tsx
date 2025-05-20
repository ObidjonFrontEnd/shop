import React from 'react'
import NavProfile from './components/nav'
import UserData from './components/userData'
import Tastiqlash from './components/tastiqlash'

const ProfileMain = () => {
	return (
		<div className='max-w-[1180px] mx-auto px-[10px]'>
			<NavProfile/>
			<div className="w-full">
				<UserData/>
				<Tastiqlash/>
			</div>
		</div>
	)
}

export default ProfileMain
