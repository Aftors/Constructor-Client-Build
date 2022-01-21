export interface ModalProps {
  active: boolean
  setActive: (e: boolean) => void
  H1?: string
}

export interface InputProps {
  active?: boolean
  value: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}
