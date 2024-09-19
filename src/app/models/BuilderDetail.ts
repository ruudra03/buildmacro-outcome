export class BuilderDetail {
  builder_name: string
  email: string
  company_name: string
  mobile: string | undefined

  constructor(builder_name: string, email: string, company_name: string, mobile?: string) {
    this.builder_name = builder_name
    this.mobile = mobile
    this.email = email
    this.company_name = company_name
  }
}
