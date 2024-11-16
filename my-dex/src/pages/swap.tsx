import Layout from '@/components/layout/Layout'
import TokenSelectModal from '@/components/common/TokenSelectModal'
import { useState } from 'react'

interface Token {
  symbol: string
  name: string
  address: string
  logo?: string
}

export default function Swap() {
  const [fromToken, setFromToken] = useState({
    symbol: 'ETH',
    amount: ''
  })
  
  const [toToken, setToToken] = useState({
    symbol: 'USDT',
    amount: ''
  })

  const [isSelectingFrom, setIsSelectingFrom] = useState(false)
  const [isSelectingTo, setIsSelectingTo] = useState(false)

  const handleTokenSelect = (token: Token) => {
    if (isSelectingFrom) {
      setFromToken({ ...fromToken, symbol: token.symbol })
    } else if (isSelectingTo) {
      setToToken({ ...toToken, symbol: token.symbol })
    }
  }

  return (
    <Layout>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-surface rounded-xl">
        <h2 className="text-2xl font-bold mb-6">代币兑换</h2>
        
        {/* From Token Input */}
        <div className="bg-background p-4 rounded-lg mb-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">从</span>
            <button 
              className="text-primary"
              onClick={() => setIsSelectingFrom(true)}
            >
              选择代币
            </button>
          </div>
          <div className="flex items-center">
            <input 
              type="number"
              className="bg-transparent text-2xl outline-none w-full"
              placeholder="0.0"
              value={fromToken.amount}
              onChange={(e) => setFromToken({...fromToken, amount: e.target.value})}
            />
            <span className="text-xl font-medium">{fromToken.symbol}</span>
          </div>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center -my-2">
          <button className="bg-surface p-2 rounded-lg">
            ↓
          </button>
        </div>

        {/* To Token Input */}
        <div className="bg-background p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">到</span>
            <button 
              className="text-primary"
              onClick={() => setIsSelectingTo(true)}
            >
              选择代币
            </button>
          </div>
          <div className="flex items-center">
            <input 
              type="number"
              className="bg-transparent text-2xl outline-none w-full"
              placeholder="0.0"
              value={toToken.amount}
              onChange={(e) => setToToken({...toToken, amount: e.target.value})}
            />
            <span className="text-xl font-medium">{toToken.symbol}</span>
          </div>
        </div>

        {/* Swap Button */}
        <button className="w-full py-4 bg-primary rounded-lg font-medium">
          兑换
        </button>
      </div>

      {/* Add Token Select Modals */}
      <TokenSelectModal
        isOpen={isSelectingFrom || isSelectingTo}
        onClose={() => {
          setIsSelectingFrom(false)
          setIsSelectingTo(false)
        }}
        onSelect={handleTokenSelect}
      />
    </Layout>
  )
}