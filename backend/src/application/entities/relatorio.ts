import { randomUUID } from "node:crypto"
import { Afetados } from "./afetados"
import { Animais } from "./animais"

interface RelatorioProps {
  enfermos: number,
  gravidade: string,
  relatorio: string,
  encaminhamento: string,
  memorando: string,
  oficio: string,
  processo: string,
  assunto: string,
  observacoes: string,
  areaAfetada: string,
  tipoConstrucao: string,
  tipoTalude: string,
  vegetacao: string,
  danosMateriais: boolean,
  dataGeracao: Date,
  dataAtendimento: Date
  afetados: Afetados
  animais: Animais
}

export class Relatorio {
  private _id: string
  private props: RelatorioProps

  constructor(props: RelatorioProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public set enfermos(enfermos: number) {
    this.props.enfermos = enfermos;
  }

  public get enfermos(): number {
    return this.props.enfermos;
  }

  public set gravidade(gravidade: string) {
    this.props.gravidade = gravidade;
  }

  public get gravidade(): string {
    return this.props.gravidade;
  }

  public set relatorio(relatorio: string) {
    this.props.relatorio = relatorio;
  }

  public get relatorio(): string {
    return this.props.relatorio;
  }

  public set encaminhamento(encaminhamento: string) {
    this.props.encaminhamento = encaminhamento;
  }

  public get encaminhamento(): string {
    return this.props.encaminhamento;
  }

  public set memorando(memorando: string) {
    this.props.memorando = memorando;
  }

  public get memorando(): string {
    return this.props.memorando;
  }

  public set oficio(oficio: string) {
    this.props.oficio = oficio;
  }

  public get oficio(): string {
    return this.props.oficio;
  }

  public set processo(processo: string) {
    this.props.processo = processo;
  }

  public get processo(): string {
    return this.props.processo;
  }

  public set assunto(assunto: string) {
    this.props.assunto = assunto;
  }

  public get assunto(): string {
    return this.props.assunto;
  }

  public set observacoes(observacoes: string) {
    this.props.observacoes = observacoes;
  }

  public get observacoes(): string {
    return this.props.observacoes;
  }

  public set areaAfetada(areaAfetada: string) {
    this.props.areaAfetada = areaAfetada;
  }

  public get areaAfetada(): string {
    return this.props.areaAfetada;
  }

  public set tipoConstrucao(tipoConstrucao: string) {
    this.props.tipoConstrucao = tipoConstrucao;
  }

  public get tipoConstrucao(): string {
    return this.props.tipoConstrucao;
  }

  public set tipoTalude(tipoTalude: string) {
    this.props.tipoTalude = tipoTalude;
  }

  public get tipoTalude(): string {
    return this.props.tipoTalude;
  }

  public set vegetacao(vegetacao: string) {
    this.props.vegetacao = vegetacao;
  }

  public get vegetacao(): string {
    return this.props.vegetacao;
  }

  public set danosMateriais(danosMateriais: boolean) {
    this.props.danosMateriais = danosMateriais;
  }

  public get danosMateriais(): boolean {
    return this.props.danosMateriais;
  }

  public set dataGeracao(dataGeracao: Date) {
    this.props.dataGeracao = dataGeracao;
  }

  public get dataGeracao(): Date {
    return this.props.dataGeracao;
  }

  public set dataAtendimento(dataAtendimento: Date) {
    this.props.dataAtendimento = dataAtendimento;
  }

  public get dataAtendimento(): Date {
    return this.props.dataAtendimento;
  }
}