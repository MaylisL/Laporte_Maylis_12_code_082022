import axios from "axios";
import { mockActivity, mockAverageSession, mockPerformance, mockUserData } from "./mockData";


// SWITCH_VARIABLE can be change to either "mock" for mock  data or "api" for api data
const SWITCH_VARIABLE = "mock"

/**
 * will call api or return mock data depending on SWITCH_VARIABLE
 * @param {string} id Id of the  user
 * @returns {promise} either getting data or error
 */
export function getUserData(id) {
    if(SWITCH_VARIABLE === 'mock') {
        return new Promise((resolve, reject) =>  {
            resolve(mockUserData)
        })
    } else if(SWITCH_VARIABLE === 'api') {   
  return axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        return response.data.data
    }).catch((err) => {
        throw err
    })
    }

}

/**
 * will call api or return mock data depending on SWITCH_VARIABLE
 * @param {string} id Id  of the  user
 * @returns {promise} either getting data or error
 */
export function getUserActivity(id) {
    if(SWITCH_VARIABLE === 'mock') {
        return new Promise((resolve, reject) =>  {
            resolve(mockActivity)
        })
    }  else if(SWITCH_VARIABLE === 'api') {
        return axios.get(`http://localhost:3000/user/${id}/activity`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
    
}

/**
 * ill call api or return mock data depending on SWITCH_VARIABLE
 * @param {string} id Id  of the  user
 * @returns {promise} either getting data or error
 */
export function getUserPerformance(id) {
    if(SWITCH_VARIABLE === 'mock') {
        return new Promise((resolve, reject) => {
            resolve(mockPerformance)
        })
    } else if(SWITCH_VARIABLE === 'api')  {
        return axios.get(`http://localhost:3000/user/${id}/performance`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
}

/**
 * ill call api or return mock data depending on SWITCH_VARIABLE
 * @param {string} id Id  of the  user
 * @returns {promise} either getting data or error
 */
export function getUserAverageSession(id) {
    if(SWITCH_VARIABLE === 'mock') {
        return new Promise((resolve, reject) => {
            resolve(mockAverageSession)
        })
    } else if(SWITCH_VARIABLE === 'api') {
        return axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
}

