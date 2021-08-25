import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductAmount = dedAmount => {
    const {amount} = this.state
    if (amount > 0) {
      this.setState(prevState => ({amount: prevState.amount - dedAmount}))
    } else {
      this.setState(prevState => ({amount: prevState.amount}))
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-con">
        <div className="ui-con">
          <div className="name-con">
            <div className="circle">H</div>
            <h1 className="name">Harsha Vardhan</h1>
          </div>
          <div className="balance-con">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {amount} <br /> <span className="in-words">In Rupees</span>
            </p>
          </div>
          <h1 className="withdraw-text">Withdraw</h1>
          <p className="choose-text">CHOOSE SUM(IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDeno => (
              <DenominationItem
                key={eachDeno.id}
                denominationsItem={eachDeno}
                deductAmount={this.deductAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
