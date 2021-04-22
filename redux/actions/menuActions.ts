//Action Types
export const CLOSE_MENU = "CLOSE_MENU";
export const OPEN_MENU = "OPEN_MENU";

//Action Creator
export const closeMenu = () => ({
  type: CLOSE_MENU
});

export const openMenu = () => ({
  type: OPEN_MENU
});
