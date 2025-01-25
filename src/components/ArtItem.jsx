function ArtItem({item}) {
    return (
        <div className={'photo '+item.category}>
        <img src={item.filename.replace(".jpg","_thumbnail.jpg")}/>
        <p className="caption">{item.title}</p>
        <a href="#">Details</a>
        <ul className="details">
          <li key="created">created: {item.created}</li>
          <li key="artist">artist: {item.artist}</li>
          <li key="seal">seal: {item.seal}</li>
          <li key="translation">translation: {item.translation}</li>
          <li key="notes">translation: {item.notes}</li>
        </ul>
      </div>
    )
}
export default ArtItem