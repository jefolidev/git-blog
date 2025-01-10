export function SearchBar() {
  return (
    <div className="flex flex-col my-16 gap-2">
      <header className="flex justify-between">
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <form className="">
        <input type="text" className="w-full" />
      </form>
    </div>
  )
}
