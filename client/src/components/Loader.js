import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div style={{textAlign:"center", top:'50%', left:'50%', margin: '-50px 0 0 -50px', position:'absolute'}}>
        <Spinner animation="border" role="status" variant='light'/>
        <br></br>
        <span style={{color: 'white' }}>Loading...</span>
    </div>
  );
}

export default Loader;