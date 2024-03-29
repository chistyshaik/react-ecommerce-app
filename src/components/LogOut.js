import React, { useEffect } from 'react'
import { useUserContext } from '../contexts/UserProvider'

export default function LogOut() {
    const { logout } = useUserContext();

  useEffect(() => {
    localStorage.clear();
    logout()
  }, [])

  return (
    null
  )
}
