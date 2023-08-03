interface EnderecoProps {
  cep: string
  rua: string
  bairro: string
  cidade: string
}

export class Endereco {
  private props: EnderecoProps

  constructor(props: EnderecoProps) {
    this.props = props
  }

  public get cep(): string {
    return this.props.cep;
  }

  public set cep(cep: string) {
    this.props.cep = cep;
  }

  public get rua(): string {
    return this.props.rua;
  }

  public set rua(rua: string) {
    this.props.rua = rua;
  }

  public get bairro(): string {
    return this.props.bairro;
  }

  public set bairro(bairro: string) {
    this.props.bairro = bairro;
  }

  public get cidade(): string {
    return this.props.cidade;
  }

  public set cidade(cidade: string) {
    this.props.cidade = cidade;
  }
}