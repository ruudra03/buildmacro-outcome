export class BuilderCodes {
  private usedCodes: IBuilderCode[] | undefined

  public checkGeneratedCode(newCode: IBuilderCode): boolean {
    if (this.usedCodes?.includes(newCode)) {
      return true
    }
    return false
  }

  public addUsedCode(usedCode: IBuilderCode) {
    this.usedCodes?.push(usedCode)
  }

  public getAllUsedCodes(): IBuilderCode[] | undefined {
    return this.usedCodes
  }

  // Use this to set fetched used codes
  public setAllUsedCodes(usedCodes: IBuilderCode[]) {
    this.usedCodes = usedCodes
  }
}

export interface IBuilderCode {
  code: string
}
