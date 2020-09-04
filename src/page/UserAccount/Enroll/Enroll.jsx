import React from 'react';
import Style from './Enroll.module.scss'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollOne: '',
      enrollTwo: '',
      enrollThree: '',
      enrollFour: '',
      enrollFive: '',
      enrollSix: '',
      enrollSeven: '',
      phone: '',
    };
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  errollUp() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className={Style["enroll-box"]}>
        <p className={Style["enroll-head-box"]}>新規登録</p>
        <div className={Style["enroll-content-box"]}>
          <InputLabel>メールアドレス</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollOne"
            type='text'
            value={this.state.enrollOne}
            onChange={this.handleChange.bind(this)}
          />
          <InputLabel>ユーザー名</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollTwo"
            type='text'
            value={this.state.enrollTwo}
            onChange={this.handleChange.bind(this)}
          />
          <InputLabel>名前</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollThree"
            type='text'
            value={this.state.enrollThree}
            onChange={this.handleChange.bind(this)}
          />
          <InputLabel>住所</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollFour"
            type='text'
            value={this.state.enrollFour}
            onChange={this.handleChange.bind(this)}
          />
          <InputLabel>電話番号</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollFive"
            type='text'
            value={this.state.enrollFive}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className={Style["enroll-content-box"]}>
          <InputLabel>パスワード</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollSix"
            type='text'
            value={this.state.enrollSix}
            onChange={this.handleChange.bind(this)}
          />
          <InputLabel>パスワード再入力</InputLabel>
          <Input
          className={Style["enroll-content-item"]}
            name="enrollSeven"
            type='text'
            value={this.state.enrollSeven}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <Button className={Style["enrollBtn"]} variant="contained" color="primary" onClick={this.errollUp.bind(this)}>
        登録する
        </Button>
      </div>
    )
  }
}

export default Enroll
