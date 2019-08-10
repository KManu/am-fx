import { environment } from '../../../environments/environment';

let host = 'http://localhost:8001/';
if (environment.production === true) {
    host = 'https://api.am-fx.ml/';
}


const URLS = {
  users: {
    login: host + 'users/login',
    create: host + 'users/create'
  },
  organisation: {
    createOrganisation: host + 'organisations/create',
    getDetailsByCode: host + 'organisations/getOrganisationByCode',
    getAll: host + 'organisations/getAll'
  },
  currencies: {
    get: host + 'currencies/get',
    getByOrg: host + 'currencies/getByOrg',
    upsert: host + 'currencies/upsert'
  },
  transactions: {
    create: host + 'transactions/create',
    getOrgTransactions: host + 'transactions/getOrgTransactions',
    getUserTransactions: host + 'transactions/getByID'
  },
};


export {
  URLS
};
