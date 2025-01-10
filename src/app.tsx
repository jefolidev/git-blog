import { useState } from 'react'
import { RepositoryCard } from './components/card'
import { ProfileComponent } from './components/profile'
import { SearchBar } from './components/search'

interface Repositories {
  title: string
  publishedDate: string
  slug: string
}

export function App() {
  const [repos, setRepos] = useState<Repositories[]>([
    {
      title: 'JavaScript data types and data structures',
      publishedDate: 'Há 1 dia',
      slug: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.',
    },
    {
      title: 'JavaScript data types and data structures',
      publishedDate: 'Há 1 dia',
      slug: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.',
    },
  ])

  return (
    <div>
      <header className="flex flex-col   ">
        <div className="banner" />
        <div className="mx-auto w-full max-w-[80rem]">
          <ProfileComponent />
        </div>
      </header>
      <main className="max-w-[80rem] mx-auto">
        <SearchBar />
        <div className="grid grid-cols-2 gap-8">
          {repos.map((repo) => {
            return (
              <RepositoryCard
                key={repo.title}
                title={repo.title}
                publishedDate={repo.publishedDate}
                slug={repo.slug}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
