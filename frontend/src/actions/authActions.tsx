// import hash from 'object-hash';
import {asyncConstant} from '../constant/asyncConstant';
import {commonConstant} from '../constant/commonConstant';

export const login = (/*email: string, password: string*/): any => {
        return {type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`};
};
// await (() => {
//     return {type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`};
// })();
// await (() => {
//     if (email === 'admin@admin.com' && password === hash('admin')) {
//         return {type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.SUCCESS}`};
//     } else {
//         return {type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.FAILURE}`};
//     }
// })();
