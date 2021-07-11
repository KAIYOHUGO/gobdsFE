import { createStore } from 'vuex';
import { api } from '@/js/api';
import { AxiosResponse } from 'axios';




/**
 * @type {api}
 */
var API;
export const store = createStore({
    state() {
        const url = localStorage.getItem("url"), name = localStorage.getItem("name"), session = localStorage.getItem("session");
        API = new api(url, name, session);
        return {
            alerts: [],
            isLogin: Boolean(url && name && session),
            tabID: "terminal",
            servers: []
        }
    },
    getters: {
    },
    mutations: {
        setTabID(state, id) {
            state.tabID = id;
        },
        /**
         * 
         * @param {Object} state
         * @param {Boolean} state.isLogin
         * @param {[string, string, AxiosResponse]} payload islogin, `url, name, session
         */
        setLoginInfo(state, payload) {
            state.isLogin = payload[0];
            API = new api(payload[1], payload[2], payload[3]);
            localStorage.setItem("url", payload[1]);
            localStorage.setItem("name", payload[2]);
            localStorage.setItem("session", payload[3]);
        },
        setServers(state, list) {
            state.servers = list;
        },
        popAlert(state) {
            state.alerts.shift();
        },
        /**
         * 
         * @param {Object} state
         * @param {Array<{level:string,status:string,messenge:string}>} state.alerts
         * @param {AxiosResponse} resp
         */
        addRespAlert(state, resp) {
            console.log(resp);
            if (!resp) return this.commit("addAlert", [2, "Unknow Error", "Unknow Error,Pls Report this"])
            if (resp instanceof Error) return this.commit("addAlert", [2, resp.name ?? "Runtime Error", resp.message ?? "Unknow Error,Pls Report this"])
            if (resp.status == 401) this.commit("setLoginInfo", [false, "", "", ""])
            this.commit("addAlert", [2, resp.data.status, resp.data.messenge])
        },
        /**
         * 
         * @param {Object} state
         * @param {Array<{level:string,status:string,messenge:string}>} state.alerts
         * @param {[number,string,string]} payload level, status, messenge
         * @returns {AxiosResponse|null}
         */
        addAlert(state, payload) {
            state.alerts.push({ level: payload[0], status: payload[1], message: payload[2] })
        }
    },
    actions: {
        /**
         * @param {[string, string, string]} payload url, name,password
         * @returns 
         */
        async login({ commit }, payload) {
            let temp = new api(payload[0], payload[1]);
            const resp = await temp.signin(payload[1], payload[2]);
            if (resp[1] || !resp[0].headers.authorization) return commit("addRespAlert", resp[1]);
            commit("setLoginInfo", [true, payload[0], payload[1], resp[0].headers.authorization]);
            return null;
        },
        async loginout({ commit }) {
            const resp = await API.signout();
            if (resp[1]) commit("addRespAlert", resp[1]);
            commit("setLoginInfo", [false, "", "", ""]);
        },
        async createAccount({ commit }, payload) {
            const resp = await API.newAccount(payload[0], payload[1]);
            if (resp[1]) return commit("addRespAlert", resp[1])
            commit("addAlert", ["0", "Success", "Create Account Success"])
        },
        async changeConfig({ commit }, payload) {
            const resp = await API.changeConfig(payload[0], payload[1]);
            if (resp[1]) return commit("addRespAlert", resp[1])
            commit("addAlert", ["0", "Success", "Change Config Success"])
        },
        async getServers({ commit }) {
            const resp = await API.getServers();
            if (resp[1]) return commit("addRespAlert", resp[1]);
            commit("setServers", resp[0].data.servers);
        }
    }
})