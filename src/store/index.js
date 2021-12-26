import {createStore} from 'vuex'
import axios from "axios";
import router from "@/router";


const URL = "http://127.0.0.1:8000"


const tokenConfig = (token) =>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    return config
}

export default createStore({
    state: {
        videos: [],
        videosTmp: [],
        token: localStorage.getItem('token'),
        userData: null,
        videosOfUser: [],
        registrationError: null,
        loginError: null,
        repeatPasswordError: "",
    },
    mutations: {
        setVideos(state, videos) {
         state.videos = videos
            state.videosTmp = videos
        },
        searchVideo(state, val) {
            state.videosTmp = state.videos.filter((video) => (
                video.tags.indexOf(val.val) > -1
            ))
        },
        login (state, authData) {

            const config = {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
            const {username, password} = authData;
            const body = JSON.stringify({username, password});


            axios.post(URL + '/auth/token/login/', body, config).then(res => {
                localStorage.setItem("token", res.data.auth_token);
                console.log(localStorage.getItem("token"));

                state.token = res.data.auth_token
                router.push({
                    path: '/cabinet',
                });
            }).catch(err => {
                state.loginError = err.response.data
            })
        },
        setRepeatPasswordError(state, msg) {
            state.repeatPasswordError = msg;
        },
        logout (state) {
            const token = state.token || localStorage.getItem('token');
            const config = tokenConfig(token)

            localStorage.removeItem("token")
            axios.post(URL + '/auth/token/logout/', null, config).then(res => {
                router.push({
                    path: '/',
                });
            }).catch(err => {
                console.log(err)
            })
            state.userData = null
            state.token = ""
            state.videos = []
            state.videosTmp = []
            state.videosOfUser = []
            state.registrationError = null
            state.loginError = null
            state.repeatPasswordError = ""
            localStorage.removeItem('token');
        },
        loadUser(state, res) {
            console.log(res)
            state.userData = res.data
        },
        changeUser(state, res) {

            const token =localStorage.getItem('token');
            const config = tokenConfig(token)

            console.log(res)
            console.log(token)
            axios.put(URL + '/auth/users/me/', res, config).then(res => {
                console.log(res.data)
            }).catch(err => {

            })
        },
        addVideo(state, res){
            const token = state.token || localStorage.getItem('token');
            const config = tokenConfig(token)
            const data = {
                ...res,
                owner: state.userData.id
            }
            axios.post(URL + '/api/videos-of-user/', data, config).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        removeVideo(state, data){
            const token = state.token || localStorage.getItem('token');
            const config = tokenConfig(token)
            axios.delete(URL + `/api/videos-of-user/${data.id}`, config).then(res => {
                state.videosOfUser = state.videosOfUser.filter(video => video.id !== data.id)
            }).catch(err => {
                console.log(err)
            })
        },
        getVideosOFUser(state, res) {
            const token = localStorage.getItem('token');
            const config = tokenConfig(token)
            axios.get(URL + `/api/videos-of-user/?owner=${state.userData.id}`, config).then(res => {
                state.videosOfUser = res.data;
            }).catch(err => {
                console.log(err)
            })

        },

        registerUser(state, res) {

            const config = {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
            axios.post(URL + `/auth/users/`, res,config).then(res => {
                router.push({
                    path: "/sign-in"
                })
            }).catch(err => {
                state.registrationError = err.response.data
            })
        }

    },
    actions: {
        registerUser(ctx) {
            ctx.registerUser()
        },
        logoutUser(ctx) {
            ctx.logout();
        },
        loadVideos(ctx) {
            axios.get("http://127.0.0.1:8000/api/link-videos/")
                .then(data => {
                    ctx.commit("setVideos", data.data)
                }).catch((error) => {
                console.log("ERROR: " + error);
            });
        },
        getUserData (ctx) {
            const token =localStorage.getItem('token');
            const config = tokenConfig(token)

            axios.get(URL + '/auth/users/me/', config).then(res => {
                console.log(res)
                console.log(res.data)
               ctx.commit("loadUser", {data: res.data})

            }).catch(err => {
                router.push({
                    path: '/sign-in',
                });
            })
        },
        getVideosOfUser(ctx){

            ctx.commit("getVideosOFUser")

        }

    },
    modules: {},
    getters: {
        allVideos(state) {
            return state.videosTmp
        },
        userData(state) {
            return state.userData
        },
        getToken(state) {
            return state.token
        },
        getAllVideosOfUser(state){
            return state.videosOfUser;
        },
        getRegistrationError(state) {
            return state.registrationError;
        },
        getLoginError(state) {
            return state.loginError;
        },
        getRepeatPasswordError(state) {
            return state.repeatPasswordError;
        }
    }

})
