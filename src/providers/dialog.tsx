import React, { createContext, ReactNode, useContext, useState } from 'react'

const DialogContext = createContext<{
  isOpen: boolean
  content: ReactNode
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDialogContent: React.Dispatch<React.SetStateAction<ReactNode>>
  openDialog: () => void
} | null>(null)

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setDialogContent] = useState('')

  const openDialog = () => {
    setIsOpen(true)
  }

  return (
    <DialogContext.Provider
      value={{ isOpen, content, setDialogContent, setIsOpen, openDialog }}
    >
      {children}
    </DialogContext.Provider>
  )
}
