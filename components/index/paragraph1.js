import Link from "next/link"
export default function Paragraph1() {
    const title = "Create your ERC20 Token Discover, Collect, and Sell Extraordinary NFTs with Tokens"
    const description = " first and largest NFT marketplace work with your Custom token like BUSD or USDT"
    
    return (
        <div className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:items-center m-8 sm:m-16 '>
            {/* left element */}
            <div className='flex-1 flex flex-col items-center md:items-start'>
                <h1 className='text-white dark:text-gray-800 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight'>{title}</h1>
                <p className='text-white dark:text-gray-800 text-base leading-tight mt-2 sm:mt-6'>{description}</p>
                <div className='flex-1 flex flex-row gap-4 mt-[4vw]'>
                    <div className=''>
                    <Link href="./categories">

                        <button className='rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E] text-white text-xs sm:text-base px-6 sm:px-10 py-1.5 sm:py-2 shadow-lg'>Collection</button>
                    </Link>
                    </div>
                    <div className=''>
                    <Link href="./create-nft">
                        <button className='rounded-full border text-white dark:text-gray-800 text-xs sm:text-base px-6 sm:px-10 py-1.5 sm:py-2 dark:border-gray-300 shadow-lg'>Create NFT</button>
                   </Link>
                    </div>
                </div>
            </div>

            {/* right element : background image */}
            <div className='flex-1 flex items-center'>
                <img src="/assets/svg/head.svg" alt="BgEthereumNFT" className='w-full h-auto object-cover'></img>
            </div>
        </div>
    )
}