import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './app/screen/RootNavigation'

const App = () => {
  return (

    <>
      <StatusBar />
      <RootNavigation />
    </>
  )
}

export default App

const styles = StyleSheet.create({})