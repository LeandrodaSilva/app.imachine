//Action Types
export const CLOSE_MENU = "SIDEBAR_RIGHT_CLOSE_MENU";
export const OPEN_MENU = "SIDEBAR_RIGHT_OPEN_MENU";

//Action Creator
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});
