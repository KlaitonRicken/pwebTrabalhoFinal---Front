export class Utilizacao{
  id: number;
  data: string;
  hora: string;
  kmInicial: number;
  kmFinal: number;
  veiculo = new Veiculo();
  funcionario = new Funcionario();
}

export class Veiculo{
  id: number;
  ano: number;
  placa: string;
  marca: string;
  modelo: string;
}
export class Funcionario{
  id: number;
  nome: string;
}
