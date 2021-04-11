export const enum RouterEnum {
  HOME = 'home',
  LOGIN = 'login',
  POSITIONS = 'positions',
  ASSETS = 'assets'
}

export class NavRouterLinks {
  static MODULE = {
    POSITIONS: RouterEnum.POSITIONS,
    ASSETS: RouterEnum.ASSETS
  }

  static PAGE = {
    HOME: RouterEnum.HOME,
    LOGIN: RouterEnum.LOGIN
  }

  static NAV = {
    POSITIONS: `${RouterEnum.POSITIONS}/${RouterEnum.HOME}`,
    ASSETS: `${RouterEnum.ASSETS}/${RouterEnum.HOME}`
  }
}
