import { fetchService } from './fetchService';
import { Config } from '../config'

const baseUrl = `${Config.API_Url}/guest`;

export const GuestService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

export default GuestService

function getAll() {
    return fetchService.get(baseUrl);
}

function getById(id) {
    return fetchService.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchService.post(baseUrl, params);
}

function update(id, params) {
    return fetchService.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchService.delete(`${baseUrl}/${id}`);
}