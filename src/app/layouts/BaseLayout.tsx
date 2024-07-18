import { Outlet, useNavigate } from 'react-router-dom'
import '@/app/styles/App.css'
import { LayoutAlert } from '@/widgets/LayoutAlert'
import { useEffect } from 'react'
import { SideBar } from '@/widgets/sidebar'
import { Header } from '@/widgets/header'

export default function BaseLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem('market-accessToken')
    if (!token) {
      navigate('/auth')
    }
  }, [])

  return (
    <div>
      <LayoutAlert />
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}
