import * as actions from '../../../frontend/src/actions/authActions';
import {asyncConstant} from '../../../frontend/src/constant/asyncConstant';
import {commonConstant} from '../../../frontend/src/constant/commonConstant';

describe('[Actions] auth tests', () => {
    it('[login]', () => {
        expect(actions.login(/*'admin@admin.com', 'admin'*/)).toEqual({
            type: `${commonConstant.REQUES_FOR_AUTH}${asyncConstant.BEGIN}`,
        });
    });
});
