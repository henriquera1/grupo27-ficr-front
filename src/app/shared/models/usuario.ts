export class Usuario{
  constructor(
    public nome?: string,
    public sobrenome?: string,
    public cpf?: string,
    public bairro?: string,
    public endereco?: string,
    public ocorrencia?: number,
    public situacao?: boolean,
  ){ }
  
}
