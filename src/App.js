import React from "react";
import { ref, set, update,onValue } from "firebase/database";
import { db } from "../src/firebase/setup";
import BingoPopUp from "./components/bingo_pop_up";
import Button from "./components/button";
import CountDown from "./components/count_down";
import Options from "./components/options";
import TopPlayer from "./components/top_player";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionIndex: [],
      isCountDown: false,
      popUpOpen: false,
      uid: "",
      numberUsers:0,
    };
  }

  btnAction(btn) {
    if (btn === "start") {
      let optionIndex1 = Math.floor(Math.random() * 5);
      let optionIndex2 = Math.floor(Math.random() * 5);
      let optionIndex3 = Math.floor(Math.random() * 5);

      let optionIndex = [optionIndex1, optionIndex2, optionIndex3];
      this.setState({
        optionIndex: optionIndex,
        popUpOpen: true,
      });
      const updates = {};
      updates["sessions/" + this.state.uid + "/results"] = optionIndex;
      const usersRef = ref(db, 'sessions/' + this.state.uid + '/users');
      onValue(usersRef, (snapshot) => {
        const data =Object.values(snapshot.val());
          data.map(user=>{
            let totalAward=0;
            user.choices.map(({choice,money})=>{
              optionIndex.map(option=>{
                totalAward+=option===choice?money:0;
              })
            })
            let userMoney;
            const userMoneyRef = ref(db, 'users/' +user.username+'/money');
            onValue(userMoneyRef, (snapshot) => {
              userMoney=snapshot.val();
          })
            updates['users/'+user.username+'/money']=userMoney+totalAward
        }
        )
      });
      update(ref(db), updates);
    } else if (btn === "createCode") {
      let uid = "";
      for (let i = 1; i <= 11; i++)
        uid +=
          i % 4 === 0
            ? "-"
            : String.fromCharCode(Math.floor(Math.random() * 26 + 1) + 96);
      this.setState({
        uid: uid,
        numberUsers:0
      });
      set(ref(db, "sessions/" + uid), {
        uid: uid,
        isOpenning: false,
      });
    } else {
      this.setState({
        isCountDown: true,
      });
      const updates = {};
      updates["sessions/" + this.state.uid + "/isOpenning"] = true;
      update(ref(db), updates);
      const cocedUser = ref(db, 'sessions/' + this.state.uid+'/users');
      onValue(cocedUser, (snapshot) => {
        this.setState({numberUsers:Object.entries(snapshot.val()??[]).length});
      });
    }
  }

  stopCountDown() {
    this.setState({
      isCountDown: false,
    });
    const updates = {};
    updates["sessions/" + this.state.uid + "/isOpenning"] = false;
    update(ref(db), updates);
  }

  popUpClose() {
    this.setState({
      popUpOpen: false,
    });
  }

  render() {
    return (
      <div className=".App">
        <div className="host-name primary-title">FU-DEVER</div>
        <div className="primary-title">BẦU CUA</div>
        <div className="secondary-title">Mã Ván: {this.state.uid}</div>
        <div className="secondary-title">Đã có: {this.state.numberUsers} người cọc</div>
        <div id="wrap-content">
          <TopPlayer/>
          <Options />
          {this.state.isCountDown && (
            <CountDown stopCountDown={() => this.stopCountDown()} />
          )}
        </div>

        <div id="wrap-btns">
          <Button name="Ván mới" clicked={() => this.btnAction("createCode")} />
          <Button
            name="BẮT ĐẦU ĐẶT CƯỢC"
            clicked={() => this.btnAction("countDown")}
          />
          <Button name="XỔ" clicked={() => this.btnAction("start")} />
        </div>

        {this.state.popUpOpen && (
          <BingoPopUp
            close={() => this.popUpClose()}
            data={this.state.optionIndex}
          />
        )}
      </div>
    );
  }
}
