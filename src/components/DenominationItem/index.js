import './index.css'

const DenominationItem = props => {
  const {denominationsItem, deductAmount} = props
  const {value} = denominationsItem

  const callOnClickFunc = () => {
    deductAmount(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={callOnClickFunc}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
