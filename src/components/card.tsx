interface RepositoriesCard {
  title: string
  publishedDate: string
  slug: string
}

export function RepositoryCard({
  title,
  publishedDate,
  slug,
}: RepositoriesCard) {
  return (
    <div className="card-wrapper">
      <header>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </header>
      <div>
        <span>{slug}</span>
      </div>
    </div>
  )
}
