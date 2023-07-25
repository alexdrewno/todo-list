import { Modal as RRModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

type ModalProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export function Modal({ open, onClose, children }: ModalProps) {
    return (
        <RRModal open={open} onClose={onClose} center>
            {children}
        </RRModal>
    )
}
