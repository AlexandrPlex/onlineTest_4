import axios, { AxiosPromise } from 'axios';
import {config} from '../config';
import {ServerRoters} from '../constant/serverRouters';

export function authenticationRequest(email: string, password: string): AxiosPromise {
  return axios.post(`${config.apiPrefix}:${config.serverPort}/${ServerRoters.auth}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email,
      password,
    })
    .then((response: any) => {
      if (response.status === 200 || 304) {
        return response;
      }
    }).then((response: any) => {
        if (response.data.auth) {
            return {...response.data};
        } else {
            return {...response.data, auth: false };
        }
    });
}
// export function logOutRequest(): AxiosPromise {
//   return axios.post(`${config.apiPrefix}:${config.serverPort}/${ServerRoters.logout}`,
//     {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })
//     .then((response: any) => {
//       if (response.status === 200 || 304) {
//         return response;
//       }
//     });
// }

// export function getRoleRequestAxios(): AxiosPromise {
//   return axios.post(`${config.apiPrefix}:${config.serverPort}/${ServerRoters.getRole}`)
//     .then((response: any) => {
//       if (response.status === 200 || 304) {
//         return response;
//       }
//     });
// }
