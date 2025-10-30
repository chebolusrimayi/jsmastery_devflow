export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground p-12">Welcome to Next.js</h1>
        </div>
        <div className="grid gap-6">
          <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Theme Demo</h2>
            <p className="text-muted-foreground">
              This card demonstrates the theme system. Use the theme switch in the navbar to change themes!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}