import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Image from 'next/image'

// 定义代币类型
interface Token {
  symbol: string
  name: string
  address: string
  logo?: string
}

// 示例代币列表
const TOKEN_LIST: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', address: '0x...', logo: '/images/ethereum.png' },
  { symbol: 'USDT', name: 'Tether USD', address: '0x...', logo: '/images/usdt.png' },
  { symbol: 'USDC', name: 'USD Coin', address: '0x...', logo: '/images/usdc.png' },
]

interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect: (token: Token) => void
}

export default function TokenSelectModal({ isOpen, onClose, onSelect }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredTokens = TOKEN_LIST.filter(token => 
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-surface rounded-2xl p-6">
          <Dialog.Title className="text-xl font-bold mb-4">选择代币</Dialog.Title>
          
          {/* 搜索框 */}
          <input
            type="text"
            className="w-full p-3 bg-background rounded-lg mb-4"
            placeholder="搜索代币名称或地址"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          {/* 代币列表 */}
          <div className="max-h-96 overflow-y-auto">
            {filteredTokens.map(token => (
              <button
                key={token.address}
                className="w-full flex items-center p-3 hover:bg-background rounded-lg mb-2"
                onClick={() => {
                  onSelect(token)
                  onClose()
                }}
              >
                {token.logo && (
                  <div className="relative w-8 h-8 mr-3">
                    <Image 
                      src={token.logo} 
                      alt={token.symbol}
                      fill
                      className="rounded-full object-cover"
                      sizes="32px"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </button>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}