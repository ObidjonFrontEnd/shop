import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {  MapPin } from 'lucide-react'
import Link from 'next/link'
export const TopBar = () => (
	<div className='w-full bg-[#EBEFF3] hidden md:block'>
		<div className='flex justify-between items-center px-4 py-2 text-sm   max-w-[1180px] mx-auto'>
			<div className='flex items-center gap-2'>
				<span className='text-muted-foreground'>
					<MapPin />
				</span>
				<span>Tashkent</span>
			</div>
			<div className='flex gap-4'>
				<Link href='/'>About Us</Link>
				<Link href='/'>Products</Link>
				<Link href='/'>Contacts</Link>
			</div>
			<div className='text-sm'>+998 (71) 123-45-67</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger>Uz</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Ru</DropdownMenuItem>
						<DropdownMenuItem>En</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	</div>
)
