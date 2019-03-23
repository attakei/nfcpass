/**
 * NFC tag type definition
 *
 * - Type2: MAIFARE
 * - Type3: FeliCa
 *
 */
export type CardType = 'Type2' | 'Type3' | 'Type4'


/**
 * NFC Card with minimum information
 */
export class CardInfo {
  public readonly spec: CardType
  public readonly idm: string
  public readonly pmm: string|null

  public constructor(spec: CardType, idm: string, pmm: string|null = null) {
    this.spec = spec
    this.idm = idm
    this.pmm = pmm
  }
}

