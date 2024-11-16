import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          欢迎来到 DEFI TRADING PLATFORM
        </h1>
        <p className="text-gray-400 mb-8">
          去中心化交易的最佳选择
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="/swap" 
            className="px-6 py-3 bg-primary rounded-lg font-medium"
          >
            开始交易
          </a>
          <a 
            href="/pool" 
            className="px-6 py-3 bg-surface rounded-lg font-medium"
          >
            添加流动性
          </a>
        </div>
      </div>
    </Layout>
  )
}