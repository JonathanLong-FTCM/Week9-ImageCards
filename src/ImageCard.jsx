function ImageCard({ url, title, description, author, uploadedDatetime }) {
  return (
    <div style={{
         textAlign: 'center',
         padding: '15px',
         border: '1px solid #ccc',
         borderRadius: '10px',
         margin: '-5px auto',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
         backgroundColor: '#ffffff',
         fontFamily: 'sans-serif',
         fontSize: '18px',
         color: '#555',
    }}>

      <img
        src={url}
        alt={title}
        style={{
        width: '380px',
        height: '250px',
        borderRadius: '5px',
      }}/>

      <h2 style={{marginTop: '15px', color: '#273347',}}>{title}</h2>
      <p style={{marginTop: '-10px'}}>{description}</p>
      <p><span style={{fontWeight: 'bold', color: '#273347'}}>Author: </span>{author}</p>
      <p style={{marginBottom: '5px'}}><span style={{fontWeight: 'bold', color: '#273347'}}>Uploaded: </span>{uploadedDatetime}</p>
    </div>
  );
}
export default ImageCard;