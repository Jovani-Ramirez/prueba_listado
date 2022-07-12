export interface IData {
  results: IApiData[];
}

export interface IApiData {
  _id: string;
  compiledRelease: IRealese;
}

interface IRealese {
  ciclo: string;
  date: string;
}