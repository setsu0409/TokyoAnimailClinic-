import React from 'react';
import Style from './Home.module.scss'
import Logo from '../../static/logo_1.png'
import {Button,GridListTile,GridList,Backdrop,CircularProgress,
  TextField,Select,MenuItem,InputLabel,Input,FormHelperText
}from  '@material-ui/core';
import { Rate,message,Anchor } from 'antd';

import 'antd/dist/antd.css'

import Image_home from '../../static/home.jpg'
import Image_phone from '../../static/phone.png'
import Image_location from '../../static/location.png'
import Head_image from '../../static/store_banner.jpg'
import Timg from '../../static/timg.jpg'
import Doctor1 from '../../static/doctor_img/doc1.jpg'
import Doctor2 from '../../static/doctor_img/doc2.jpg'
import Doctor3 from '../../static/doctor_img/doc3.jpg'
import des1 from '../../static/hospitalDesc_img/1.jpg'
import des2 from '../../static/hospitalDesc_img/2.jpg'
import des3 from '../../static/hospitalDesc_img/3.jpg'
import des4 from '../../static/hospitalDesc_img/4.jpg'
import des5 from '../../static/hospitalDesc_img/5.jpg'
import des6 from '../../static/hospitalDesc_img/6.jpg'
import des7 from '../../static/hospitalDesc_img/7.jpg'
import des8 from '../../static/hospitalDesc_img/8.jpg'
import des9 from '../../static/hospitalDesc_img/9.jpg'
import des10 from '../../static/hospitalDesc_img/10.jpg'
import des11 from '../../static/hospitalDesc_img/11.jpg'
import des12 from '../../static/hospitalDesc_img/12.jpg'
import guze from '../../static/hospitalDesc_img/guze.png'
import boy from '../../static/boy.png'

import ald_1 from '../../static/hospitalDesc_img/ald/1.jpg'
import ald_2 from '../../static/hospitalDesc_img/ald/2.jpg'
import ald_3 from '../../static/hospitalDesc_img/ald/3.jpg'
import ald_4 from '../../static/hospitalDesc_img/ald/4.jpg'

import dgs_1 from '../../static/hospitalDesc_img/dgs/1.jpg'
import dgs_2 from '../../static/hospitalDesc_img/dgs/2.jpg'
import dgs_3 from '../../static/hospitalDesc_img/dgs/3.jpg'
import dgs_4 from '../../static/hospitalDesc_img/dgs/4.jpg'

import guze_1 from '../../static/hospitalDesc_img/guze/1.jpg'
import guze_2 from '../../static/hospitalDesc_img/guze/2.jpg'
import guze_3 from '../../static/hospitalDesc_img/guze/3.jpg'
export default class HospitalDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      loading:false,
      hospitalId:"",//商店id
      tileData:[],
    introduceArray:[{id:1,imageUrl:Doctor1,title:"よく診る病気やケガにこそ、質の高い診療を",centent:"滋賀県近江八幡市の森動物病院は、75年以上の歴史をもつ。ワクチンやフィラリア、去勢・避妊手術などの予防医療から、CT検査や高難度の外科手術にまで対応できる総合医療を提供。3代目の森健志先生と篠田仁美先生へ、同院の強みや特徴について伺った。",firstName:"かどやアニマルホスピタル",addr:"門屋",duty:"美知代院長 " },
    {id:2,imageUrl:Doctor2,title:"犬と猫のリンパ腫。診断とQOLを維持する抗がん剤治療",centent:"札幌市厚別区にある「北央どうぶつ病院」は、腫瘍の診療に力を入れている。リンパ腫の治療では、腫瘍の種類と広がりを理解し、それに合わせた抗がん剤治療が有効だという。福本真也院長に、リンパ腫の診断や副作用の少ない治療について伺った。",firstName:"北央どうぶつ病院",addr:"福本",duty:"真也院長" },
    {id:3,imageUrl:Doctor3,title:"すべての猫の幸せのために、京都ではじめての猫専門病院",centent:"京都ではじめての猫専門病院「動物病院京都ねこの病院」が2016年に開院した。「猫好きの方はもちろん、猫をよく知らない方も、この病院をきっかけに猫を好きになってもらいたい」と話す園田祐三院長に、病院の特徴や猫の病気についてお話を伺った。",firstName:"動物病院 京都 ねこの病院",addr:"園田",duty:"祐三院長" },
  ],//医生介绍数组
  selectedDate:"",
  currentVariety:"",
  varietyArray:[{name:"猫",id:1},{name:"犬",id:2},{name:"魚",id:3},{name:"鳥",id:4}],//种类数组
  doctorArray:[{name:"藤田 しげる",id:"1"},{name:"吉田正一",id:"2"},{name:"とりやまあきら",id:"3"},{name:"鳥山明",id:"4"}],
  commentArray:[
    {imageUrl:boy,name:"ちょうさんりし",date:"2019/08/09",content:"@user39905679あなたが支払ったのはパッチム商品で、パッチム商品が完成する前にパッチムで表示するべきで、売り物ではありません。またissue記述の場合、支払い成功後も未支払い状態となり、支払い状態に誤りがないかチェックしてください",rateValue:3.5},
    {imageUrl:boy,name:"ちょうさんりし",date:"2019/08/09",content:"@user39905679あなたが支払ったのはパッチム商品で、パッチム商品が完成する前にパッチムで表示するべきで、売り物ではありません。またissue記述の場合、支払い成功後も未支払い状態となり、支払い状態に誤りがないかチェックしてください",rateValue:3},
    {imageUrl:boy,name:"ちょうさんりし",date:"2019/08/09",content:"@user39905679あなたが支払ったのはパッチム商品で、パッチム商品が完成する前にパッチムで表示するべきで、売り物ではありません。またissue記述の場合、支払い成功後も未支払い状態となり、支払い状態に誤りがないかチェックしてください",rateValue:4},
  ],
  currenRate:2.5,
  commentRemark:"",
  currentDoctor:"",
  orderUserPhone:"",//
  orderUserName:"",
  orderDate:"",
  orderButtonClick:false,
  copyUserName:""
    }
  }
  componentDidMount(){
    try{
      let array=this.props.location.search.split("="),tileData=[],doctorArray=[]
      if(array[array.length-1]=="")return
      if(array[array.length-1]==1){
        //ald医院
        tileData=[{img:ald_1,title:"image",author:"tone"},
          {img:ald_2,title:"image",author:"tone"},
          {img:ald_3,title:"image",author:"tone"},
          {img:ald_4,title:"image",author:"tone"},
          {img:ald_2,title:"image",author:"tone"},
          {img:ald_1,title:"image",author:"tone"},
          {img:ald_2,title:"image",author:"tone"},
          {img:ald_3,title:"image",author:"tone"},
          {img:ald_4,title:"image",author:"tone"},  
        ]
        doctorArray=[{name:"藤田 しげる",id:"1"},{name:"吉田正一",id:"2"},{name:"とりやまあきら",id:"3"},{name:"鳥山明",id:"4"}]
      }else if(array[array.length-1]==2){
        //dgs医院
        tileData=[
        {img:dgs_1,title:"image",author:"tone"},
        {img:dgs_2,title:"image",author:"tone"},
        {img:dgs_3,title:"image",author:"tone"},
        {img:dgs_4,title:"image",author:"tone"},
        {img:dgs_3,title:"image",author:"tone"},
        {img:dgs_2,title:"image",author:"tone"},
        {img:dgs_1,title:"image",author:"tone"},
        {img:dgs_4,title:"image",author:"tone"},
        {img:dgs_2,title:"image",author:"tone"},  
        ]
        doctorArray=[{name:"榎本 明美",id:"1"},{name:"榎本 加奈子",id:"2"},{name:"江藤 留美",id:"3"},{name:"江沢 典予",id:"4"}]
      }else if(array[array.length-1]==3){
        //guze
        tileData=[
          {img:guze_1,title:"image",author:"tone"},
          {img:guze_2,title:"image",author:"tone"},
          {img:guze_3,title:"image",author:"tone"},
          {img:guze_2,title:"image",author:"tone"},
          {img:guze_1,title:"image",author:"tone"},
          {img:guze_3,title:"image",author:"tone"},
          {img:guze_1,title:"image",author:"tone"},
          {img:guze_2,title:"image",author:"tone"},
          {img:guze_1,title:"image",author:"tone"},  
          ]
          doctorArray=[{name:"藤森 加奈子",id:"1"},{name:"藤崎 弥代",id:"2"},{name:"藤崎 奈々子",id:"3"},{name:"福田 有美子",id:"4"}]
      }
      this.setState({
        tileData:tileData,
        hospitalId:array[array.length-1],
        doctorArray:doctorArray
      })
    }catch(e){

    }
  }
  showMoreFunc=()=>{

    this.loadingFunc()
   
  }
  loadingFunc=()=>{
    this.setState({
      loading:true
    })
    setTimeout(()=>{
      let {introduceArray}=this.state
      this.setState({
        loading:false,
        introduceArray:introduceArray.concat(introduceArray)
      })
    },2000)
  }
  dateSelectFunc=(data)=>{
    this.setState({
      selectedDate:data
    })
  }
  searchConditionFunc=(flag,e)=>{
    console.log(e.target.value,"::::999")
    if(flag==1){
      this.setState({
        orderDate:e.target.value
      })
    }else if(flag==2){//
      this.setState({
        currentVariety:e.target.value
      })
    }else if(flag==3){
      this.setState({
        currentDoctor:e.target.value
      })
    }else if(flag==4){
      this.setState({
        orderUserName:e.target.value,
        copyUserName:e.target.value
      })
    }else if(flag==5){
      this.setState({
        orderUserPhone:e.target.value
      })
    }
  }
  commetCheckedFunc=(num)=>{
    this.setState({
      currenRate:num
    })
  }
  submitCommetFunc=()=>{
    const {commentRemark,commentArray,currenRate,copyUserName}=this.state
    if(commentRemark!=""){
      let date=new Date()

      let year=date.getFullYear();
      let month=date.getMonth()
      let day=date.getUTCDate()
     
      this.loadingFunc()
      setTimeout(()=>{
        commentArray.unshift(
          {imageUrl:boy,name:(copyUserName==""?"ちょうさんりし":copyUserName),date:year+"/"+month+"/"+day,content:commentRemark,rateValue:currenRate},
        )
      },200)
     
     this.setState({
      commentRemark:"",
      currenRate:2.5,
      
     })
    }else{
      message.warning('評価情報を入力してください!');
    }
  }
  commentRemarkFunc=(e)=>{//评价输入框回调
    console.log("；；；；",e.target.value)
    this.setState({
      commentRemark:e.target.value
    })
  }
  scrollToFunc=()=>{
    let anchorElement = document.getElementById('order');
    if(anchorElement) { anchorElement.scrollIntoView(); }
  }
  submitOrderFunc=()=>{//提交预约
    let {orderDate,currentVariety,currentDoctor,orderUserName,orderUserPhone}=this.state
    this.setState({
      orderButtonClick:true
    }) 
    if(orderDate==""||currentVariety==""||currentDoctor==""||orderUserName==""||orderUserPhone==""){
      return
    }else{
      this.loadingFunc()
      
      setTimeout(()=>{
        message.success("预约成功！")
        this.setState({
          orderDate:"",
          currentVariety:"",
          currentDoctor:"",
          orderUserName:"",
          orderUserPhone:"" ,
          orderButtonClick:false
        })
      },2000)
    }
   
  }
  render(){

    const {currentDoctor,tileData,introduceArray,
      selectedDate,currentVariety,varietyArray,
      doctorArray,commentArray,commentRemark,
      orderDate,orderUserName,orderUserPhone,
      orderButtonClick,
      hospitalId
    }=this.state
    let hosTitleMor=(hospitalId==1)?"10:00-13:00":((hospitalId==2)?"09:00-12:00":"10:00-12:00")
    let hosTitleAft=(hospitalId==1)?"16:00-19:00":((hospitalId==2)?"16:00-20:00":"15:00-19:00")
    return(
      <div className={Style['HospitalDetail']}>
          
        <div className={Style['top-box']}>
          <div className={Style['textb']}>
            <div className={Style['text']}>病院情報</div>
          </div> 
        </div> 
        <div className={Style['middle-box']}>
          <div className={Style['left']}>
            {/* <img src={Logo}></img> */}
         
            <div style={{fontSize:"24px",marginLeft:"10px",marginBottom:"10px"}}>
              {this.state.hospitalId==1&&"アラタ動物病院"}
              {this.state.hospitalId==2&&"代官山ペットクリニック"}
              {this.state.hospitalId==3&&"谷澤動物病院"}
              <div style={{textAlign:"left"}}>
                  <p >
                    住所：
                    <a>{(hospitalId==1)?"〒170-0002 東京都豊島区巣鴨1-23-9 ウエスティIII 1F":((hospitalId==2)?"〒150-0022 東京都渋谷区恵比寿南3-7-7":"〒130-0003 東京都墨田区横川4-7-10")}</a>
                  </p>
                  <p>
                    電話：<a>{(hospitalId==1)?"03-5981-6161":((hospitalId==2)?"03-3793-7078":"03-3621-4038")}</a>
                  </p>
                 <p>
    診療対象動物：<a>{(hospitalId==1)?"イヌ ネコ":((hospitalId==2)?"イヌ ネコ ウサギ ハムスター モルモット 爬虫類":"犬　猫")}</a>
                 </p>
                 <p>公式ホームページ：
                   <a href={(hospitalId==1)?"http://arata-ah.jp/":((hospitalId==2)?"http://www.daikanyama-pc.com/":"http://ah-tanizawa.com/")}>{(hospitalId==1)?"http://arata-ah.jp/":(hospitalId==2)?"http://www.daikanyama-pc.com/":"http://ah-tanizawa.com/"} </a>
                </p>
                 <p>
                  <p >診察時間:</p>
                 <table className={Style["hospitals-detail-timetable"]}>
                    <thead><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th><th>祝</th></tr></thead>
                    <tbody>
                      <tr><td>{hosTitleMor}</td><td>{hosTitleMor}</td><td>{(hospitalId==3)?"-":hosTitleMor}</td><td>{(hospitalId==3)?hosTitleMor:"-"}</td><td>{hosTitleMor}</td><td>{hosTitleMor}</td><td>{(hospitalId==3)?"-":hosTitleMor}</td><td>{(hospitalId==3)?"-":hosTitleMor}</td></tr>
                      <tr><td>{hosTitleAft}</td><td>{hosTitleAft}</td><td>{(hospitalId==3)?"-":hosTitleAft}</td><td>{(hospitalId==3)?hosTitleAft:"-"}</td><td>{hosTitleAft}</td><td>{hosTitleAft}</td><td>{(hospitalId==3)?"14:00-17:00":((hospitalId==2)?hosTitleAft:"-")}</td><td>{(hospitalId==3)?"14:00-17:00":(hospitalId==2?hosTitleAft:"-")}</td></tr>
                    </tbody>
                  </table>
                 </p>
                <p>
                ※診療日の13:00～16:00は手術や往診を行っております。手術、往診、健康診断の『スタンダードプラン・しっかりプラン』は予約制になります。VISA、Master、JCB、AMEX、ダイナーズ、その他各種クレジットカード対応
                </p>
                <p style={{color:"#FF471F"}}>
                上記内容に変更がある場合もあるため、正確な診療時間は直接各病院のホームページ・電話等で確認してください。 
                </p>
              </div>
            </div>
          
          </div>
          <div className={Style['right']}>
           
            <div className={Style['floating-button']}>
             
              <Button variant="contained" color="primary" onClick={this.scrollToFunc}>
                {/* 点我预约 */}
                予約する
              </Button>
           
            </div>
            <div className={Style['des_ph']}>
              <GridList cellHeight={160} className={Style['list']} cols={3}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
          
        </div>

        {/* 定位 */}
        <div className={Style['buttom-box']}>
            {/* 院长介绍 */}
            
              <div className={Style['title-box']} style={{marginBottom:"20px"}} >
                院長紹介
              </div>
            
              <div style={{width:"60%",marginLeft:"10%",textAlign:"left"}}>
              {
                    (hospitalId==1)&&<div className={Style['des']}>
                      <p>
                          メッセージ
                            私は生まれた時から巣鴨でずっと暮らしてきました。
                            その地元、巣鴨で『アラタ動物病院』を開院させていただいたことは、大変嬉しい事です。
                            当院は、『かかりつけ医』としてワンちゃん、ネコちゃんが困っていること、もちろんオーナーさんが困っていることに真摯に向き合い、それを解決していく努力をします。&nbsp;
                        </p>
                        <p>
                            問題を解決する事で、ワンちゃん、ネコちゃん、オーナーさん、みんなが幸せになれる手助けをしてあげられたらと思います。
                            『こんな事を聞いたら、変かな？』なんて事はありません。お気軽にご相談下さい。
                            どうぞよろしくお願い致します。&nbsp;
                        </p>
                        <p>
                          <p>院長略歴：</p>
                          <p>&nbsp;&nbsp;平成16年3月 日本獣医畜産大学（現：日本獣医生命科学大学）獣医学科　卒業</p>
                          <p>&nbsp;&nbsp;平成16年4月 田中動物病院(品川区）　勤務</p>
                          <p>&nbsp;&nbsp;平成18年6月 谷澤動物病院(墨田区)　勤務</p>
                          <p>&nbsp;&nbsp;平成21年2月 アルマ動物病院(世田谷区)　勤務</p> 
                          <p>&nbsp;&nbsp;平成24年2月 代々木公園犬猫病院(渋谷区）　勤務</p>
                          <p>&nbsp;&nbsp;平成26年2月 アラタ動物病院　開院</p>
                          
                        </p>
                  </div>
                  
                }
                {
                  (hospitalId==2)&&<div className={Style['des']}>
                  <p>
                  メッセージ：
                    この度、代官山ペットクリニックを事業継承し引き継がせて頂く事となりました佐藤裕臣と申します。&nbsp;
                  </p>
                  <p>
                  1984年に代官山ペットクリニックが開院して以来の個人病院ならではとも言える患者様お一人お一人に合った診療が出来るよう私が責任を持って努める所存でございます。

                  小さく大切な家族のために何をしてあげられるか、何が一番なのかを常に考え、飼い主様と共に最善の診療を目指し続けます。

                  治療だけではなく、どんな些細な事でも相談して頼って頂ければと思います。
                  今後とも宜しくお願い致します。

                  2014年5月
                  代官山ペットクリニック 院長　佐藤 裕臣&nbsp;
                  </p>
                  <p>
                    <p>院長略歴：</p>
                    <p>&nbsp;&nbsp;麻布大学卒業</p>
                    <p>&nbsp;&nbsp;横浜市、埼玉県の動物病院に勤務。</p>
                    <p>&nbsp;&nbsp;世田谷区の動物病院にて院長として勤務。</p>
                    <p>&nbsp;&nbsp;2014年5月より代官山ペットクリニック開業。</p>
                  </p>
                  </div>
                }
                {
                  (hospitalId==3)&&<div className={Style['des']}>
                  <p>
                  メッセージ：
                  当院はできるだけ安価での高度医療を提供するように努力しています。&nbsp;
                  </p>
                  <p>
                  日本人はまるで神がくださったかのような器用な指先を持っています。熟練した技を使えば、高度で高価と思われる手術も案外安く行うことができます。さらに必要のない食事や薬を省くことで動物は健康になれます。当院では10年放置しても腐らないドッグフードをやめ、自然食を薦めています。室内犬にフィラリアの薬は投与しません。ジステンパーなどのワクチンも最小限にしか使用しません。副作用のない薬は存在しないのです。&nbsp;
                  </p>
                  </div>
                }
              </div>    
            
               
          </div>
        <div className={Style['buttom-box']}>
         
          <div className={Style['title-box']}>
            {/* 接受宠物种类 */}

            診療対象動物
          </div>
          <div>
            <table id={Style.animallists}>
            <tbody>
              <tr>
                <td><a id={Style["animallists-l1"]} >イヌ</a></td>
                <td><a id={Style['animallists-l2']} >ネコ</a></td>
                <td><a id="animallists-l3">ウサギ</a></td>
                <td><a id="animallists-l4">ハムスター</a></td>
                <td><a id="animallists-l5" >フェレット</a>)</td>
                <td><a id="animallists-l6" >モルモット</a></td>
              </tr>
              <tr>
                <td><a id="animallists-l7" >リス</a></td>
                <td><a id="animallists-l8" >鳥</a></td>
                <td><a id="animallists-l9">両生類</a></td>
                <td><a id="animallists-l10" >爬虫類</a></td>
                <td><a id="animallists-l12" >魚</a></td>
                <td><a id="animallists-l13" >家畜</a></td>
              </tr>
            </tbody>
            </table>       
          </div>
          <div className={Style['title-box']}>
        
            治療実績
          </div>
          <table className={Style['column3']} style={{margin:"10px"}}><tbody>
            <tr className={Style['tr']}>
              <td><a>歯と口腔系疾患</a> (1163)</td>
              <td><a>眼科系疾患</a> (1135)</td>
              <td><a >皮膚系疾患</a> (1279)</td>
            </tr>
            <tr>
              <td><a >脳・神経系疾患</a> (1064)</td>
              <td><a >循環器系疾患</a> (1202)</td>
              <td><a >呼吸器系疾患</a> (1113)</td>
            </tr>
            <tr>
              <td><a >消化器系疾患</a> (1148)</td>
              <td><a >肝・胆・すい臓系疾患</a> (994)</td>
              <td><a >腎・泌尿器系疾患</a> (1137)</td>
            </tr>
            <tr>
              <td><a>内分泌代謝系疾患</a> (1049)</td>
              <td><a >血液・免疫系疾患</a> (1026)</td>
              <td><a >筋肉系疾患</a> (1016)</td>
              </tr>
              <tr>
              <td><a >整形外科系疾患</a> (1041)</td>
              <td><a >耳系疾患</a> (1059)</td>
              <td><a >生殖器系疾患</a> (1026)</td>
              </tr>
              <tr>
              <td><a >感染症系疾患</a> (1013)</td>
              <td><a >寄生虫</a> (987)</td>
              <td><a >腫瘍・がん</a> (1247)</td>
              </tr>
              <tr>
              <td><a >中毒</a> (917)</td>
              <td><a>心の病気</a> (684)</td>
              <td><a >東洋医学</a> (199)</td>
              </tr>
              <tr>
              <td><a>けが・その他</a> (939)</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
         
          <div style={{marginBottom:"50px"}}>

          </div>
          <div className={Style['order-box']} id="order">
       
              <h1  className={Style['title-box']} style={{textAlign:"center"}}> 
                  {/* 预约治疗 */}
            
                  予約について
              </h1>
            
            <div  style={{textAlign:"left",marginLeft:"10%",marginTop:"5%",display:"flex"}}>
              <div>
                <TextField
                    id="date"
                    label="予約時間"
                    type="datetime-local"
                    defaultValue="2017-05-24"
                    lang
                    // className={classes.textField}
                    value={orderDate}
                    onChange={this.searchConditionFunc.bind(this,1)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required={true}
                  />
                   {
                     orderButtonClick&&(orderDate=="")&&<FormHelperText style={{color:"red"}}>
                      {/* 不为空 */}
                      この項は記入する必要がある
                      </FormHelperText>
                    }
               </div> 
                <div style={{margin:"0 0 0 5%"}}>
                  <InputLabel id="demo-simple-select-label">診療対象</InputLabel>
                  <Select
                        style={{width:"150px"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentVariety}
                        onChange={this.searchConditionFunc.bind(this,2)}
                       
                       
                      >
                        {
                          varietyArray.map((item,index)=>{
                            return(
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem> 
                            )
                          })
                        }
                  </Select>
                  {orderButtonClick&&(currentVariety=="")&&
                    <FormHelperText style={{color:"red"}}>
                      {/* 不为空 */}
                      この項は記入する必要がある
                    </FormHelperText>
                  }
                </div>
                <div style={{margin:"0 0 0 8%"}}>
                  <InputLabel id="demo-simple-select-label">
                    医師を選びましょう
                    {/* 选择医生 */}
                  </InputLabel>
                  <Select
                        style={{width:"150px"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentDoctor}
                        onChange={this.searchConditionFunc.bind(this,3)}
                      >
                        {
                          doctorArray.map((item,index)=>{
                            return(
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem> 
                            )
                          })
                        }
                  </Select>
                  {orderButtonClick&&(currentDoctor=="")&&
                    <FormHelperText style={{color:"red"}}>
                      {/* 不为空 */}
                      この項は記入する必要がある
                    </FormHelperText>
                  }
                </div>
                
            </div>
            <div className={Style['secondLine']}>
                  <div style={{marginRight:"10%"}}>
                    <InputLabel id="demo-simple-select-label">
                    お名前
                      {/* 姓名 */}
                    </InputLabel>
                    <Input
                      name="hospitalName"
                      type={'text'}
                      value={orderUserName}
                      onChange={this.searchConditionFunc.bind(this,4)}
                    /> 
                     {orderButtonClick&&(orderUserName=="")&&
                    <FormHelperText style={{color:"red"}}>
                      {/* 不为空 */}
                      この項は記入する必要がある
                    </FormHelperText>
                  }
                  </div>
                  <div>
                    <InputLabel id="demo-simple-select-label">
                    連絡先
                      {/* 联系电话 */}
                    </InputLabel>
                      <Input
                        name="hospitalName"
                        type={'text'}
                        value={orderUserPhone}
                        onChange={this.searchConditionFunc.bind(this,5)}
                      /> 
                        {orderButtonClick&&(orderUserPhone=="")&&
                    <FormHelperText style={{color:"red"}}>
                      {/* 不为空 */}
                      この項は記入する必要がある
                    </FormHelperText>
                  }
                  </div>     
            </div>
            <TextField
               className={Style['thirdLine']}
                id="outlined-multiline-static"
                label="私たちに"
                multiline
                rows={10}
                // defaultValue="私たちに:"
                
                variant="outlined"
              />   
          </div>
          <Button style={{marginLeft:"60%",marginTop:"3%",marginBottom:"5%"}} onClick={this.submitOrderFunc} variant="contained" color="primary">
          
            {/* 预约 */}
            予約する
          </Button>
          <div className={Style['comment']}>
           <div className={Style['head-box']}>
              <div style={{display:"flex",marginLeft:"8%",marginBottom:"5px",fontSize:"20px"}}>
                <div>
                この動物病院の口コミを書く：&nbsp;&nbsp;
                </div>
               <Rate allowHalf defaultValue={2.5}  onChange={this.commetCheckedFunc}/>
              </div> 
              <TextField
                  className={Style['firstLine']}
                  id="outlined-multiline-static"
                  label="私たちのサービスについて話しましょう"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={commentRemark}
                  onChange={this.commentRemarkFunc}
                />
              <div style={{marginTop:"5px",marginLeft:"75%"}}>
                 <Button variant="contained" color="primary" onClick={this.submitCommetFunc}>
                   {/* 提交评论 */}
              
                 口コミを書く
                 </Button>       
              </div>                  
           </div>
           {
             (commentArray.map((item,index)=>{
               return(
                  <div className={Style['body-box']}>
                    <img  src={item.imageUrl} className={Style['left']}></img>
                    <div className={Style['right']}>
                      <div className={Style['firstLine']}>
                        <div>{item.name}</div>
                        <div>&nbsp;&nbsp;{item.date}</div> 
                      </div>
                      <div className={Style['secondLine']}>
                       {item.content}
                      </div>
                      <div className={Style['thirdLine']}>
                        <div style={{fontSize:"10px",paddingTop:"7px"}}>オピニオン値：&nbsp;&nbsp;</div>
                        <Rate allowHalf disabled value={item.rateValue}  />
                      </div>
                    </div>
                  </div>
               )
             }))
           }
            
          </div>
        </div>
        <div className={Style['buttom-box']}>
          <div className={Style['title-box']}>
            ドクターズインタビュー記事
          </div>
          <div>
            {
              // 医生介绍
              (introduceArray.map((item,index)=>{
                return (
                  <div  className={Style["introduce"]}>
                    <img className={Style['image-box']} src={item.imageUrl}></img>  
                    <div className={Style["right"]}>
                      <h1 style={{textDecoration:"underline",paddingBottom:"5px"}}>{item.title}</h1>
                      <div className={Style['content']}>
                        {item.centent}
                      </div>
                      <div className={Style['buttom-box']}>
                        {item.firstName}&nbsp;&nbsp;
                        {item.addr}&nbsp;&nbsp;
                        {item.duty}&nbsp;&nbsp;
                      </div>
                    </div>   
                  </div>
                )
              }))
            }
           <div className={Style['showMore']}>
              <Button onClick={()=>{
              this.props.history.push('/home')    
              }} style={{marginRight:"20px"}} variant="contained" color="primary">
                Back Home
              </Button>
             <Button variant="contained" color="primary" onClick={this.showMoreFunc}>
             より多くの展示
               {/* show more */}
              </Button>
           </div>
              <Backdrop style={{zIndex:9999}} open={this.state.loading} onClick={this.loadingFunc}>
                <CircularProgress color="inherit" />
              </Backdrop>
          </div>
        </div>
       
      </div>
    )
  }
}
