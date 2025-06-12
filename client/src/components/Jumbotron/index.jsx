function Jumbotron({ children }) {
    return (
      <div
        style={{
          height: 560,
          clear: 'both',
          paddingTop: 120,
          textAlign: 'center',
          backgroundColor: 'blue'
        }}
      >        
        {children}
      </div>
    );
  }
  
  export default Jumbotron;
  