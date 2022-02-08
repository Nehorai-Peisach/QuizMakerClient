import './questions.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from 'react-bootstrap'

const Questions = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const getPlayerData = async () => {
    try {
      const data = await axios.get('https://nba-players.herokuapp.com/players-stats')
      console.log(data)
      setPlayers(data.data)
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }
  const columns = [
    { dataField: 'name', text: 'Player Name' },
    { dataField: 'points_per_game', text: 'Points Per Game' },
    { dataField: 'team_name', text: 'Player Team' },
  ]

  useEffect(() => {
    getPlayerData()
  }, [])

  return <div>
    {loading
    ? <BootstrapTable keyField='name' data={players} columns={columns} pagination={paginationFactory()} />
    : <ReactBootStrap.Spinner animation='border'/>
    }
  </div> 
}

export default Questions
