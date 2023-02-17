import './index.css'

const TabId = props => {
  const {details, setTabId} = props
  const {tabId, displayText} = details

  const changeTab = () => {
    setTabId(tabId)
  }

  return (
    <li className="items">
      <button className="tab-buttons" type="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabId
