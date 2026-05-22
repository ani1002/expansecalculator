import React from 'react'
import moment from 'moment'

export const Dateformat = (date) => {
  return moment(date).format('DD/MM/YYYY')
}


