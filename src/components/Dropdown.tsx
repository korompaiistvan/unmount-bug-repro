import { useRef, useState, ReactElement, ReactNode, useEffect, useDeferredValue } from "react"
import './Dropdown.css'

export interface DropdownProps {
    button: (toggleMenu: () => void) => ReactElement<HTMLButtonElement>
    children?: ReactNode
    autoClose?: boolean | 'inside' | 'outside',
    closeTimeoutMs?: number
}

export const Dropdown = ({
    button,
    children,
    autoClose = true,
    closeTimeoutMs
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // we add a little timeout to allow children's event listeners to fire before unmounting
    // FIXME: this is ugly and there is probably a better way
    const closeMenuWithTimeOut = () => {
        setTimeout(() => setIsOpen(false), closeTimeoutMs)
    }

    return (
        <div className="dropdown-wrap">
            {button(toggleMenu)}
            {isOpen && (
                <Menu
                    onClose={closeMenuWithTimeOut}
                    autoClose={autoClose}
                >
                    {children}
                </Menu>
            )}
        </div>
    )
}

interface MenuProps extends Omit<DropdownProps, "button"> {
    onClose?: () => void
}

const Menu = ({
    children,
    onClose,
    autoClose,
}: MenuProps) => {
    const ref = useRef<HTMLDivElement>(null)


    const clickHandler = (event: MouseEvent) => {
        if (!onClose) return
        if (autoClose === true) {
            onClose()
            return
        }

        if (autoClose === false) {
            return
        }

        if (!ref.current) return
        const isClickInside = ref.current.contains(event.target as Element)

        if (!isClickInside && autoClose === 'outside') {
            onClose()
            return
        }

        if (isClickInside && autoClose === 'inside') {
            onClose()
            return
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickHandler)
        return () => {
            window.removeEventListener("mousedown", clickHandler)
        }
    }, [])

    return (
        <nav ref={ref} className='dropdown-menu'>
            {children}
        </nav>
    )
}