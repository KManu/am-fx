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
    create: host + 'currencies/create',
    get: host + 'currencies/get',
    getByOrg: host + 'currencies/getByOrg',
    upsert: host + 'currencies/upsert'
  },
  currencyPairs: {
    create: host + 'currency-pairs/create',
    getAll: host + 'currency-pairs/getAll',
    getByOrg: host + 'currency-pairs/getByOrg'
  },
  transactions: {
    create: host + 'transactions/create',
    getOrgTransactions: host + 'transactions/getOrgTransactions',
    getUserTransactions: host + 'transactions/getByID',
    delete: host + 'transactions/delete'
  },
  customers: {
    create: host + 'customer/create',
    upsert: host + 'customer/upsert',
    getByCode: host + 'customer/getByCode',
    getByOrg: host + 'customer/getByOrg',
    getByID: host + 'customer/getById'
  }
};

const KEYS = {
  userData: 'am-user',
  authToken: 'am-token'
};

export { URLS, KEYS };
