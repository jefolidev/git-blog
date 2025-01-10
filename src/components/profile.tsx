import avatar from '../assets/avatar.png'
import followersIcon from '../assets/icons/followers.svg'
import userIcon from '../assets/icons/github.svg'
import schoolIcon from '../assets/icons/university.svg'

export function ProfileComponent() {
  return (
    <div className=" bg-base-profile flex px-10 py-8 rounded-[0.625] gap-8 -mt-24 ">
      <img src={avatar} alt="" />
      <div className="grid grid-rows-3 w-full">
        <header className="flex w-full justify-between items-center">
          <h1 className="text-base-title text-2xl">Cameron Williamson</h1>
          <div className="link-wrapper">
            <a href="#a">GitHub</a>
            <div />
          </div>
        </header>
        <main>
          <span className="text-base-text">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </main>
        <footer className="flex gap-6 text-base-subtitle ">
          <div className="flex items-center gap-2">
            <img src={userIcon} alt="" className="w-[1.125rem]" />
            <p className="inline">cameronwll</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={schoolIcon} alt="" className="w-[1.125rem]" />
            <p className="inline">Rocketseat</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={followersIcon} alt="" className="w-[1.125rem]" />
            <p className="inline">32 seguidores</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
