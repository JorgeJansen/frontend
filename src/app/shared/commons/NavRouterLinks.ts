export const enum RouterEnum {
  HOME = 'home',
  LOGIN = 'login',
  POSITIONS = 'positions',
  ASSETS = 'assets',
  BUY = 'buy',
  TRANSFERS = 'transfers',
  PERFORM = 'perform'
}

export class NavRouterLinks {
  static MODULE = {
    POSITIONS: RouterEnum.POSITIONS,
    ASSETS: RouterEnum.ASSETS,
    TRANSFERS: RouterEnum.TRANSFERS
  }

  static PAGE = {
    HOME: RouterEnum.HOME,
    LOGIN: RouterEnum.LOGIN,
    BUY: RouterEnum.BUY,
    PERFORM: RouterEnum.PERFORM
  }

  static NAV = {
    POSITIONS: `${RouterEnum.POSITIONS}/${RouterEnum.HOME}`,
    ASSETS: `${RouterEnum.ASSETS}/${RouterEnum.HOME}`,
    BUY_ASSET: `${RouterEnum.ASSETS}/${RouterEnum.BUY}`,
    TRANSFERS: `${RouterEnum.TRANSFERS}/${RouterEnum.HOME}`,
    PERFORM: `${RouterEnum.TRANSFERS}/${RouterEnum.PERFORM}`
  }
}
