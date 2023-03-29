import api from './http-common';
import IBank from '../types/bank.type';

class BankDataService {
  getAll() {
    return api.get<Array<IBank>>('/');
  }

  get(id: string) {
    return api.get<IBank>(`/${id}`);
  }

  create(data: IBank) {
    return api.post<IBank>('/', data);
  }
}

export default new BankDataService();
