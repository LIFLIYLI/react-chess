import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
const Cell = function (props) {
  // const [text,setText] =React.useState('')
  return (
    <div className="cell" onClick={props.onClick}>{props.text}</div>
  )
}
//棋盘函数
const Chesbox = function () {
  //声明表示棋盘的数组
  const [cells, setCell] = React.useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])
  //监听结束变量
  const [finished,setFinish] =React.useState(false)
  //监视点击次数的变量
  const [n, setN] = React.useState(0)
  //判断输赢函数
  const tell=(copy)=>{
    for(let i=0;i<3;i++){
      if(copy[i][0]==copy[i][1] && copy[i][0]==copy[i][2] &&copy[i][0]!=null){
        setFinish(true)
        break
      }else if(copy[0][i]==copy[1][i] && copy[0][i]==copy[2][i] &&copy[0][i]!=null){
        setFinish(true)
        break
      }else if(copy[0][0]==copy[1][1] && copy[0][0]==copy[2][2] &&copy[1][1]!=null){
        setFinish(true)
        break
      }else if(copy[0][2]==copy[1][1] && copy[1][1]==copy[2][0] &&copy[1][1]!=null){
        setFinish(true)
        break
      }
    }
  }
  const onClickCell = (row, col) => {
    console.log('行：' + row, '列：' + col)
    setN(n + 1)
    //深拷贝，内存地址不变，不会触发render渲染
    const copy = JSON.parse(JSON.stringify(cells))
    copy[row][col] = n % 2 == 0 ? 'x' : '0'
    //点击次数变化值
    setCell(copy)
    //判断是否输赢
    tell(copy)
  }
  return (
    <div>
      <div>点击次数奇偶：{n}</div>
      {cells.map((res, row) => <div className="row">
        {res.map((res, col) => <div className="coor">
          <Cell text={res} onClick={() => onClickCell(row, col)} />
        </div>)}
      </div>)}
      {finished && <div className="game_over">游戏结束</div>}
    </div>
  )
}

ReactDOM.render(
  <div>
    <Chesbox />
  </div>, document.getElementById('root')
)