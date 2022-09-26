import { useState, createContext } from 'react'

const ModalContext = createContext()

function ModalProvider({ children }) {
    const [active, setActive] = useState(false)

    const handleShowModal = () => {
        setActive(true)
    }

    const handleHideModal = () => {
        setActive(false)
    }

    const value = {
        active,
        handleShowModal,
        handleHideModal
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }