import React from 'react';
import Styles from './ChangePassword.module.scss'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


export default class ChangePassword extends React.Component {
  constructor(props){
    super(props)
    this.state={
      prePassword:"",
      newPassword:"",
      userName:"",
    }
  }

  componentDidMount(){

  }
  prePasswordFunc=(e)=>{
    console.log("定位",e)
    this.setState({
      prePassword:e.target.value
    })
  }
  newPasswordFunc=(e)=>{
    this.setState({
      newPassword:e.target.value
    })
  }
  changeFunc=()=>{
    if(this.state.prePassword!='admin'){
   
      alert('原密码错误（admin）')
      return
    }
    if(this.state.newPassword==""){
      alert('新密码不为空')
      return
    }
    //成功
    this.props.history.push('/login?id='+this.state.newPassword)
  }
  userNameFunc=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
  render(){
    return (
        <div className={Styles['change-box']}>
          <div className={Styles['change-head-box']}>
            <p className={Styles["change-head-box"]}>
              {/* 密码修改 */}
              パスワードを変更する  
            </p>
            <div className={Styles["change-content-box"]}>
              <InputLabel>
                {/* 用户名 */}
                メールアドレスまたはユーザー名
              </InputLabel>
              <Input
                name="userName"
                  type={'text'}
                  value={this.state.userName}
                  onChange={this.userNameFunc.bind(this)}
              />
              <InputLabel>
                {/* 原始密码 */}
                旧パスワード
              </InputLabel>
              <Input
              name="userName"
                type={'text'}
                value={this.state.prePassword}
                onChange={this.prePasswordFunc.bind(this)}
              />
              <InputLabel>
              新パスワード
                {/* 新密码 */}
              </InputLabel>
              <Input
              name="userName"
                type={'text'}
                value={this.state.newPassword}
                onChange={this.newPasswordFunc.bind(this)}
              />
              <div>
                <Button className={Styles['changeBtn']} variant="contained" color="primary" onClick={this.changeFunc.bind(this)}>
                  {/* 提交 */}
                  パスワード変更
                </Button>
               
              </div>
            </div>
          </div>
        </div>
        )
  }
}
