import Header from '@/components/common/Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}