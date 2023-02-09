import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
           <h1>毎日２時間ぐらいITを勉強してる</h1>
           <p>でも難しいですが頑張りましょう</p>
           <h2>英語を勉強してる</h2>
           <p>毎日２時間ぐらいITを勉強してる頑張りましょう</p>
            <h3>でもTTが難しいですが頑張りましょう。今朝学校をやうむつもりです</h3>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

