import { Header } from '../Header/Header'
import { MenuSidebar } from '../MenuSidebar/MenuSidebar'
import { SettingsSidebar } from '../SettingsSidebar/SettingsSidebar'

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <MenuSidebar />
      <div className='relative w-full flex flex-col items-center'>
        <Header />
        <div className='px-5 mt-[76px]'>{children}</div>
      </div>
      <SettingsSidebar />
    </>
  )
}
