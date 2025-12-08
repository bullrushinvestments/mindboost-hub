import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindBoost Hub',
  description: 'MindBoost Hub combines AI-driven mental health coaching with educational content to help small businesses enhance employee well-being and productivity.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindBoost Hub</h1>
      <p className="mt-4 text-lg">MindBoost Hub combines AI-driven mental health coaching with educational content to help small businesses enhance employee well-being and productivity.</p>
    </main>
  )
}
