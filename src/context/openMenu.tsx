import { createContext, useContext, useState } from 'react';

interface MenuContextType {
  openMenu: boolean;
  handleMenu: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const OpenMenuContext = createContext<MenuContextType>({
	openMenu: false
} as MenuContextType);

export function OpenMenuProvider({ children }: ChildrenProps) {
	const [openMenu, setOpenMenu] = useState(false);

	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return <OpenMenuContext.Provider value={{ openMenu, handleMenu }}>{children}</OpenMenuContext.Provider>;
}

export const useOpenMenuContext = () => useContext(OpenMenuContext);