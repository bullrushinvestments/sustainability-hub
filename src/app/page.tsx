import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustainability Hub',
  description: 'A one-stop SaaS platform for small businesses to manage their sustainable practices and eco-friendly product offerings.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Sustainability Hub</h1>
      <p className="mt-4 text-lg">A one-stop SaaS platform for small businesses to manage their sustainable practices and eco-friendly product offerings.</p>
    </main>
  )
}
