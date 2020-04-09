import React from 'react';
import ReactDOM from 'react-dom'
//复杂版，原版createElement
// const div = (
//   React.createElement('div', null,
//     React.createElement('p', null,
//       React.createElement('span', null, '最后一层文字')))
// )
const Header = (
  <header>
    这是另一个组件
  </header>
)
//可以动态传入参数
const Header2=function(props){
return (
  <header>
    header头部{props.name}
  </header>
)
}
//简单组件
const button = (
  <button>
    按钮
  </button>
)
//函数组件
const Button2=function(){
  //这个状态为n，他的更新方法是setN,这个状态的初始值为0，(useState为初始值)//析构赋值
  const [n,setN] =React.useState(0)
  return (
    <div>
    {n}
    <button onClick={function(){
      setN(n+1)
    }}>点击按钮+1</button>
  </div>
  )
}
//类组件
class Buttom3 extends React.Component{
  render(){
    return (
      <div>
        这是一个类组件
      </div>
    )
  }
}

const div = (
  <div>
    {Header}
    {Header2({name:'::昵称，接收参数'})}
    <Header2 name="::昵称,接收参数，简化版" />
    <p>
      <span>本组件</span>
    </p>
    {button}
    <Button2></Button2>
    <Buttom3></Buttom3>
  </div >
)


ReactDOM.render(div, document.getElementById('root'))
// function t(tagName, children) {
//   const tag = document.createElement(tagName)
//   if (children) {
//     if (typeof children == 'string') {
//       var tex=document.createTextNode(children)
//       tag.appendChild(tex)
//     } else {
//       tag.appendChild(children)
//     }
//   }
//   return tag
// }
// document.body.appendChild(div)

