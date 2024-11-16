import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            DEFI TRADING PLATFORM
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              href="/swap" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Swap
            </Link>
            <Link 
              href="/pool" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Liquidity Pool
            </Link>
            <button className="px-4 py-2 bg-primary rounded-lg">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}