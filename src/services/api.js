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
function signIn(data, success, failure) {
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
    .post("/signup")
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
    .post("/Signout", data)
    .then((res) => {
      success(res.data)
    })
    .catch((err) => {
      alert(err.response.data)
    })
}

// --------- URLS ---------
function getUserURLS(auth, success) {
  console.log(auth);
  axios
    .get("/users/me", tokenProvider(auth))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      alert(err.response.data);
    });
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
function getRanking(auth, success) {
  console.log(auth);
  axios
    .get("/users/me", tokenProvider(auth))
    .then((res) => {
      success(res.data);
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

export {signIn, signOut, signUp, shortenURL, getUserURLS, getRanking}