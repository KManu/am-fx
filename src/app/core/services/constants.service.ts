import { environment } from '../../../environments/environment';

let host = 'http://localhost:8001/';
if (environment.production === true) {
  host = 'https://api.am-fx.ml/';
}

const URLS = {
  users: {
    login: host + 'users/login',
    create: host + 'users/create',
    getByOrg: host + 'users/findByOrg',
  },
  organisation: {
    createOrganisation: host + 'orgs/create',
    getDetailsByCode: host + 'orgs/getByCode',
    getAll: host + 'orgs/getAll',
    update: host + 'orgs/update',
    delete: host + 'orgs/delete',
    getNameAndCodes: host + 'orgs/getCodeList'
  },
  currencies: {
    get: host + 'currencies/get',
    getByOrg: host + 'currencies/getByOrg',
    upsert: host + 'currencies/upsert'
  },
  transactions: {
    create: host + 'transactions/create',
    getOrgTransactions: host + 'transactions/getOrgTransactions',
    getUserTransactions: host + 'transactions/getByID',
    delete: host + 'transactions/delete'
  }
};

export { URLS };
