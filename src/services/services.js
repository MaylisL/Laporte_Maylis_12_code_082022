import axios from "axios";
import { mockActivity, mockAverageSession, mockPerformance, mockUserData } from "./mockData";

/**
 * 
 * @param {string} id Id  of the  user  (can  provide "mock" to get  mock data)
 * @returns {promise} either getting data or error
 */
export function getUserData(id) {
    if(id === 'mock') {
        return new Promise((resolve, reject) =>  {
            resolve(mockUserData)
        })
    } else  {   
  return axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        return response.data.data
    }).catch((err) => {
        throw err
    })
    }

}

/**
 * 
 * @param {string} id Id  of the  user  (can  provide "mock" to get  mock data)
 * @returns {promise} either getting data or error
 */
export function getUserActivity(id) {
    if(id === 'mock') {
        return new Promise((resolve, reject) =>  {
            resolve(mockActivity)
        })
    }  else {
        return axios.get(`http://localhost:3000/user/${id}/activity`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
    
}

/**
 * 
 * @param {string} id Id  of the  user  (can  provide "mock" to get  mock data)
 * @returns {promise} either getting data or error
 */
export function getUserPerformance(id) {
    if(id === 'mock') {
        return new Promise((resolve, reject) => {
            resolve(mockPerformance)
        })
    } else {
        return axios.get(`http://localhost:3000/user/${id}/performance`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
}

/**
 * 
 * @param {string} id Id  of the  user  (can  provide "mock" to get  mock data)
 * @returns {promise} either getting data or error
 */
export function getUserAverageSession(id) {
    if(id === 'mock') {
        return new Promise((resolve, reject) => {
            resolve(mockAverageSession)
        })
    } else {
        return axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then(response => {
            return response.data.data
        }).catch((err) => {
            throw err
        })
    }
}

