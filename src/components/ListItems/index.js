import './index.css'

const ListItems = props => {
  const {imgUrls, checking} = props
  const {thumbnailUrl, id} = imgUrls

  const checkTheImg = () => {
    checking(id)
  }

  return (
    <li className="">
      <div className="thumbnail-items">
        <button type="button" className="button" onClick={checkTheImg}>
          <img src={thumbnailUrl} alt="thumbnail" className="img" />
        </button>
      </div>
    </li>
  )
}

export default ListItems
