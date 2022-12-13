

const Square = ({text,style}) => {
  return(
    <div style={style} className="square"><p>{text}</p></div>
  )
}

const Rectangular = ({text,style}) => {
  return(
    <div style={style} className="rec"><p>{text}</p></div>
  )
}

const withStyles = (Component) => {
  return props => {
    const style = { backgroundColor : '#0da06f', color: 'white'}
    return <Component style={style}  {...props} />
  }
}

const GreenSquares = withStyles(Square)
const GreenRecs = withStyles(Rectangular)

function App() {
  return (
    <div className="App">
      <GreenSquares text="Hi"/>
      <GreenRecs text="Bye"/>
    </div>
  );
}

export default App;
