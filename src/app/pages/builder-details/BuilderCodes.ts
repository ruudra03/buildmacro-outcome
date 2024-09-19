export class BuilderCodes {
  private usedCodes: string[] | undefined

  public checkGeneratedCode(newCode: string): boolean {
    if (this.usedCodes?.includes(newCode)) {
      return true
    }
    return false
  }

  public addUsedCode(usedCode: string) {
    this.usedCodes?.push(usedCode)
  }

  public getAllUsedCodes(): string[] | undefined {
    return this.usedCodes
  }

  // Use this to set fetched used codes
  public setAllUsedCodes(usedCodes: string[]) {
    this.usedCodes = usedCodes
  }
}
