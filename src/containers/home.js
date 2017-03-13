import React from 'react'
import { connect } from 'react-redux'
import HomePage from '../components/homepage'

const mapStateToProps = (state={ }, ownProps) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default Home
