import axios from "axios"

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  }
}

// --------- USER ---------
function login(data, success, failure) {
  axios
    .post("/login")
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
      failure()
    })
}

function signUp(data, success, failure) {
  axios
    .post("/SignUp")
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
      failure()
    })
}

function signOut(data, success) {
  axios
    .post("/SignOut", data)
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
    })
}

// --------- URLS ---------
function getUserURLS(data, success) {
  axios
    .post("/getUserURLS", data)
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
    })
}

function shortenURL(data, success) {
  axios
    .post("/shorten", data)
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
    })
}

// --------- RANKING ---------
