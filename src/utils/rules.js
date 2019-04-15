// 类似金钱,首位不为0,最多2位小数
export function checkNumPot2(rule, value, callback) {
    const reg = /(^[-]?[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (value) {
        if (!reg.test(value)) {
            setTimeout(function timer() {
                $('.el-form-item__error').css({
                    'position': "static"
                });
            }, 50)
            return callback(new Error(rule.label + '请填写数字,最多2位小数'));
        } else {
            if (rule.max != undefined) {
                if (parseFloat(value) > rule.max) {
                    return callback(new Error(rule.label + '不能大于 ' + rule.max))
                }
            }
            if (rule.min != undefined) {
                if (parseFloat(value) < rule.min) {
                    return callback(new Error(rule.label + '不能小于 ' + rule.min))
                }
            }
            callback()
        }
    } else {
        callback()
    }
}
// 数字,首位不为0,最多1位小数
export function checkNumPot1(rule, value, callback) {
    const reg = /(^[-]?[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (value) {
        if (!reg.test(value)) {
            return callback(new Error('请填写数字,最多1位小数'))
        } else {
            callback()
        }
    } else {
        callback()
    }
}
// 身份证
export function checkIdNum(rule, value, callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!value) {
        return callback(new Error('证件号码不能为空'))
    } else if (!reg.test(value)) {
        return callback(new Error('证件号码不正确'))
    } else {
        callback()
    }
}
// 整数
export function checkInterNum(rule, value, callback) {
    const reg = /^[0-9]*[1-9][0-9]*$/;
    if (!value) {
        return callback(new Error('请填写整数'))
    } else if (!reg.test(value)) {
        return callback(new Error('请输入整数'))
    } else {
        callback()
    }
}
var newpass;
export function validatePass (rule, value, callback){
    newpass = value;
    if (value === '') {
      callback(new Error('请输入新密码'));
    } else {
      callback();
    }
  };

export function validatePass2 (rule, value, callback) {
    if (value === '') {
      callback(new Error('请确认新密码'));
    } else if (value !== newpass) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };
// 校验证书编号只能是字母和数字
export function checkNumAndWord(rule, value, callback) {
    const reg =  /^[a-zA-Z0-9]{6,10}$/;
    if (value === undefined) {
        callback(new Error('请输入证书编号'));
    }else if(!reg.test(value)){
        callback(new Error('只能是长度为6到10位字母或者数字'));
    }else{
        callback();
    }
}


export default {
    // 登录
    phone: [{required: true, pattern: /^1[34578]\d{9}$/, message: '请正确填写手机号码', trigger: 'blur'}],
    checkPass: [{required: true, pattern: /\S/,message:'密码不能为空', trigger: 'blur'}],
    newPass:[{ required: true,  validator: validatePass, trigger: 'blur' },{ min: 1,  message: '密码长度最少1个字符', trigger: 'blur' }],
    oldpass:[{ required: true, message: '请输入旧密码', trigger: 'blur' },{ min: 1,  message: '密码长度最少1个字符', trigger: 'blur' }],
    confirmpass:[{ required: true, validator: validatePass2, trigger: 'blur' },{ min: 1,  message: '密码长度最少1个字符', trigger: 'blur' }],

    // 服务
    // 新增调查人员信息校验
    cardId:[{required: true, validator:checkNumAndWord, trigger: 'blur'}],
    name:[{required: true, pattern: /\S/, message: '姓名不允许为空', trigger: 'blur'}],
    unitName:[{required: true, pattern: /\S/,message: '单位名称不允许为空', trigger: 'blur'}],
    // 新增知识问答校验
    statKnowledTarget:[{required: true, pattern: /\S/, message: '目标群体不允许为空', trigger: 'blur'}],
    knowledgeType:[{required: true, pattern: /\S/, message: '问题类别不允许为空', trigger: 'blur'}],
    knowledgeQuestion:[{required: true, pattern: /\S/, message: '问题不允许为空', trigger: 'blur'}],
    // 新增数据字典
    CODE:[{required: true, pattern: /\S/, message: '类型CODE不允许为空', trigger: 'blur'}],
    typename:[{required: true, pattern: /\S/, message: '类型名称不允许为空', trigger: 'blur'}],
  };
  
  