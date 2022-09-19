import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const parseComment = (commentFromRquest: any): string => {
  if (!isString(commentFromRquest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRquest
}

const parseDate = (dateFromRquest: any): string => {
  if (!isString(dateFromRquest) || !isDate(dateFromRquest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRquest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
