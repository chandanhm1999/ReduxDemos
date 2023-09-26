import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes: {props.numOfCakes}(</h1>
      <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  )
}

const mapStateToProps = state => {   //step -1
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
