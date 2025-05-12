import { CotegorTyp } from '@/app/types/cotegoryType'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
	Bell,
	ChevronDown,
	Heart,
	Menu,
	Search,
	ShoppingCart,
	User,
} from 'lucide-react'
import Image from 'next/image'

const IconWithBadge = ({
	icon,
	count,
}: {
	icon: React.ReactNode
	count: number
}) => (
	<div className='relative'>
		{icon}
		{count > 0 && (
			<Badge className='absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full'>
				{count}
			</Badge>
		)}
	</div>
)
type CategoryNavProps = {
	data: CotegorTyp[];
};

export const LogoSearch = ({data}:CategoryNavProps) => (
	<div className='flex flex-col md:flex-row justify-between items-center gap-4 px-[10px] py-4 max-w-[1180px] mx-auto'>
		<div className='logo text-2xl font-bold w-full text-primary flex items-center justify-between gap-1'>
			<div className='flex items-center text-[27px] text-[#134E9B]'>
				<Image src={'logo.svg'} width={70} height={70} alt='logo' />
				Ashyo
			</div>
			<div className="">
			<p className='text-[#203F68] md:hidden font-semibold text-[14px]'>+998 (71) 123-45-67</p>
			</div>
			<div className="md:hidden">
				 <Menu size={25} />
			</div>
		</div>
		<div className='flex gap-[5px] md:gap-[10px] sm:min-w-[400px] lg:min-w-[688px] w-full max-w-[688px] mx-auto'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className='md:min-w-[160px] w-[120px] max-w-[160px] h-[48px] bg-[#134E9B] text-white font-bold text-[16px]'>
						Kategorıya{' '}
						<span>
							<ChevronDown className='text-[25px]' />
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='bg-white'>
					{data?.map(({name},index)=>{
						return(<DropdownMenuItem key={index}>{name}</DropdownMenuItem>)
					})}
					
	
				</DropdownMenuContent>
			</DropdownMenu>
			<div className='bg-[#EBEFF3] w-full flex min-w-[230px] rounded-[3px]'>
				<Input
					placeholder='What are you looking for?'
					className='w-full text-[10px] sm:text-[13px] text-[#00000033]  border-none outline-none h-[48px]'
				/>
				<Button className='h-[48px] w-[60px] bg-[#134E9B] rounded-[6px] text-white'>
					<Search />
				</Button>
			</div>
		</div>

		<div className='icons hidden md:flex gap-3'>
			<div className='w-[50px] h-[48px] bg-[#EBEFF3] flex text-[#545D6A] justify-center items-center rounded-[6px]'>
				<IconWithBadge icon={<Bell />} count={2} />
			</div>

			<div className='w-[50px] h-[48px] bg-[#EBEFF3] flex text-[#545D6A] justify-center items-center rounded-[6px]'>
				<IconWithBadge icon={<Heart />} count={11} />
			</div>

			<div className='w-[50px] h-[48px] bg-[#EBEFF3] flex text-[#545D6A] justify-center items-center rounded-[6px]'>
				<IconWithBadge icon={<ShoppingCart />} count={7} />
			</div>

			<div className='w-[50px] h-[48px] bg-[#EBEFF3] flex text-[#545D6A] justify-center items-center rounded-[6px]'>
				<User className='w-5 h-5' />
			</div>
		</div>

	</div>
)
