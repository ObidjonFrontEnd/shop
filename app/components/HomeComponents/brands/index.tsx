
import Image from 'next/image'
import Link from 'next/link'


const Brands = () => {

	return (
		<div className='max-w-[1180px] mx-auto px-[10px] py-[100px]'>
			<div className='w-full grid grid-cols-2  md:grid-cols-4 h-[500px] md:h-[275px] auto-rows-fr gap-[10px]'>
				<Link href={`/fillter?brend=1`}
					className='row-span-2 bg-[#67B43733] flex justify-center items-center'
				>
					<Image src='/artel.png' width={110} height={50} alt='artel' />
				</Link>
				<Link href={'/fillter?brend=2'} className='row-span-3 bg-[#034EA21A] flex items-center justify-center'>
					<Image src='/samsung.png' width={110} height={50} alt='artel' />
				</Link>
				<Link href={'/fillter?brend=3'} className='row-span-2 flex justify-center items-center bg-[#00439C1F]'>
					<Image src='/nokia.png' width={110} height={50} alt='artel' />
				</Link>
				<Link href={'/fillter?brend=4'} className='row-span-4 flex items-center justify-center bg-[#FF670033]'>
					<Image src='/xiomi.png' width={110} height={50} alt='artel' />
				</Link>

				<Link href={'/fillter?brend=5'}className='row-span-3 bg-[#0000001A] flex items-center justify-center'>
					<Image src='/apple.png' width={110} height={50} alt='artel' />
				</Link>

				<Link href={'/fillter?brend=6'} className='bg-[#006DB833] row-span-2  order-2 md:order-none flex items-center justify-center'>
					<Image src='/vivo.png' width={110} height={50} alt='artel' />
				</Link>

				<Link href={'/fillter?brend=7'} className='bg-[#FF1A1F33] flex items-center justify-center  order-1 md:order-none row-span-3 md:row-start-3 md:row-end-6 '>
					<Image src='/huawei.png' width={110} height={50} alt='artel' />
				</Link>
				<div className='bg-[#EBEFF3] order-3 md:order-none flex items-center justify-center'>
					<p className='text-[#134E9B] text-[16px] font-medium'>Ko’proq</p>
				</div>
			</div>
		</div>
	)
}

export default Brands
