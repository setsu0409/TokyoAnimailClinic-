import React from 'react';
import {Link} from 'react-router-dom'
import Style from './Login.module.scss'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      changedPassword:"admin",
    };
  }

  componentDidMount(){
 
    try{
      let array=this.props.location.search.split("=")
      if(array[array.length-1]=="")return
      this.setState({
        changedPassword:array[array.length-1]
      })
     
    }catch(e){

    }
    
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginUp() {
    const {userName, passWord} = this.state
    if (!userName) {
      alert('ユーザーIDを入力する')
      return
    }
    if (!passWord) {
      alert('パスワードを入力する')
      return
    }
    if (userName !== 'admin' || passWord !== this.state.changedPassword) {
      alert('ユーザーIDまたはパスワードが間違っています')
      return
    }

    this.props.history.push('/home?id='+1)
  }

  render() {
    return(
      <div className={Style["login-box"]}>
        <p className={Style["login-head-box"]}>登録</p>
        <div className={Style["login-content-box"]}>
          <InputLabel>ユーザーID</InputLabel>
           <Input
           name="userName"
            type={'text'}
            value={this.state.userName}
            onChange={this.handleChange.bind(this)}
          />
           <InputLabel>パスワード</InputLabel>
           <Input
            name="passWord"
            type='password'
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <Button className={Style["loginBtn"]} variant="contained" color="primary" onClick={this.loginUp.bind(this)}>
        ログインする
        </Button>
        <Link to="/enroll">
          <p className={Style["foot-btn"]}>新規登録をする</p>
        </Link>
        <Link to="/changePassword">
        <p className={Style["foot-btn"]}>パスワードを変更する</p>
        </Link>
      </div>
    )
  }
}

export default Login