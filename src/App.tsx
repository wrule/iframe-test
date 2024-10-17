import './App.css'

function App() {
  return <iframe
    src={localStorage.iframe_src ?? 'https://www.baidu.com'}
    style={{
      width: '100%',
      height: 'calc(100vh - 18px)',
      border: 'solid 1px #333333',
    }}
  />;
}

export default App
