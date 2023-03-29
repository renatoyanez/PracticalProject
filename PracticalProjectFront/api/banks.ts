import {databaseAxios, apiAxios} from './http-common';
import IBank from '../types/bank.type';

class BankDataService {
  getAllFromDB() {
    return databaseAxios.get<Array<IBank>>('/');
  }

  getAllFromApi() {
    return apiAxios.get<Array<IBank>>('/');
  }

  get(id: string) {
    return databaseAxios.get<IBank>(`/${id}`);
  }

  create(data: IBank[]) {
    return databaseAxios.post<IBank[]>('/', {data});
  }
}

export default new BankDataService();
