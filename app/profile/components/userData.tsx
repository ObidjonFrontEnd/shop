import React from 'react'

const UserData = () => {
	return (
		<div className='w-full mt-[25px]'>
			<form className='w-full'>
				<div className='flex w-full gap-[10px] mb-[10px] flex-col md:flex-row'>
					<label className='flex w-full flex-col '>
						<span className='text-[#0A1729] text-[16px] font-bold'>Name</span>
						<input type='text' className='w-full outline-none px-[10px] rounded-[8px] text-[#545D6A] py-[10px] bg-[#EBEFF3]'  placeholder='Name' />
					</label>
					<label className='flex w-full flex-col'>
						<span className='text-[#0A1729] text-[16px] font-bold'>SurName</span>
						<input type='text' className='w-full outline-none px-[10px] rounded-[8px] text-[#545D6A] py-[10px] bg-[#EBEFF3]' placeholder='SurName' />
					</label>
	
				</div>
				<div className="flex w-full gap-[10px] flex-col md:flex-row">
					<label className='flex w-full flex-col'>
						<span className='text-[#0A1729] text-[16px] font-bold'>Phone Number</span>
						<input type='text' className='w-full outline-none px-[10px] rounded-[8px] text-[#545D6A] py-[10px] bg-[#EBEFF3]' placeholder='Plase Enter Your Phone Number' />
					</label>


					<label className='flex w-full flex-col'>
						<span className='text-[#0A1729] text-[16px] font-bold'>Password</span>
						<input type='password' className='w-full outline-none px-[10px] rounded-[8px] text-[#545D6A] py-[10px] bg-[#EBEFF3]' placeholder='Plase Enter Your Password' />
					</label>
				</div>
			</form>
		</div>
	)
}

export default UserData
