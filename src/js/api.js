import { encode } from 'js-base64';
import axios from 'axios';
import { AxiosResponse } from 'axios';

export class api {
    /**
     * 
     * @param {string} name - name to login
     * @param {string} password - password to login
     * @returns {Promise<[AxiosResponse,Error]>} right is err
     */
    async signin(name, password) {
        try {
            const resp = await this.send.post("/api/session", {}, {
                auth: {
                    username: name,
                    password: password
                }
            });
            return [resp, null];
        } catch (err) {
            return [null, err];
        }
    }
    /**
     * 
     * @returns {Promise<[AxiosResponse,Error]>} right is err
     */
    async signout() {
        try {
            const resp = await this.send.delete("/api/session");
            return [resp, null];
        } catch (err) {
            return [null, err];
        }
    }
    // }
    // /**
    //  * 
    //  * @param {string} name server name to create
    //  * @param {string} path server path to create
    //  * @param {string} command server command to create (can omit)
    //  * @returns {[any,any]} if true mean fail
    //  */
    // async newServer(name, path, command) {
    //     try {
    //         const resp = await (await fetch(`${this.url}/api/server`, {
    //             method: methodPost,
    //             headers: new Headers({
    //                 "Authorization": `Bearer ${this.session}`
    //             }),
    //             body: JSON.stringify({
    //                 server: name,
    //                 path: path,
    //                 command: command
    //             })
    //         })).json()
    //         return [resp, false];
    //     } catch (err) {
    //         return [err, true];
    //     }
    // }
    // /**
    //  * 
    //  * @param {string} name - server name to delete
    //  * @returns {[any,any]} if true mean fail
    //  */
    // async deleteServer(name) {
    //     try {
    //         const resp = await (await fetch(`${this.url}/api/server`, {
    //             method: methodDelete,
    //             headers: new Headers({
    //                 "Authorization": `Bearer ${this.session}`
    //             }),
    //             body: JSON.stringify({
    //                 server: name,
    //             })
    //         })).json()
    //         return [resp, false];
    //     } catch (err) {
    //         return [err, true];
    //     }
    // }

    /**
     * 
     * @param {string} name 
     * @param {string} password 
     * @returns {Promise<[AxiosResponse,Error]>} right is err
     */
    async newAccount(name, password) {
        try {
            const resp = await this.send.post("/api/user", {
                name: name,
                password: password
            })
            return [resp, null];
        } catch (err) {
            return [null, err];
        }
    }
    // /**
    //  * 
    //  * @param {string} name 
    //  * @returns {bool}  - if false mean fail,or return sturct
    //  */
    // async deleteAccount(name) {
    //     try {
    //         const resp = await (await fetch(`${this.url}/api/user`, {
    //             method: methodDelete,
    //             body: JSON.stringify({
    //                 name: name,
    //             }),
    //             headers: new Headers({
    //                 "Authorization": `Bearer ${this.session}`
    //             })
    //         })).json()
    //         return [resp, false];
    //     } catch (err) {
    //         return [err, true];
    //     }
    // }
    /**
     * 
     * @returns {Promise<[AxiosResponse,Error]>} right is err
     */
    async getServers() {
        try {
            const resp = await this.send.get(`/api/user/${encode(this.name)}/servers`)
            return [resp, null];
        } catch (err) {
            return [null, err];
        }
    }
    /**
     * 
     * @param {string} password 
     * @param {string} newpassword 
     * @returns {Promise<[AxiosResponse,Error]>} right is err
     */
    async changeConfig(password, newpassword) {
        try {
            const resp = await this.send.put(`/api/user/${encode(this.name)}/config`, {
                password: password,
                newpassword: newpassword
            })
            return [resp, null];
        } catch (err) {
            return [null, err];
        }
    }

    // /**
    //  * @todo fix json
    //  * @param {string} command 
    //  * @returns 
    //  */
    // async inputCommand(command) {
    //     try {
    //         const resp = await (await fetch(`${this.url}/api/user/${encode(this.name)}/config`, {
    //             method: methodPost,
    //             headers: new Headers({
    //                 "Authorization": `Bearer ${this.session}`
    //             }),
    //             body: JSON.stringify({
    //                 password: password,
    //                 newpassword: newpassword
    //             })
    //         })).json()
    //         return [resp, false];
    //     } catch (err) {
    //         return [err, true];
    //     }
    // }



    /**
     * 
     * @param {string} url 
     * @param {string} name 
     * @param {string} session
     */
    constructor(url, name, session) {
        this.send = axios.create({
            baseURL: url,
            headers: { "Authorization": session }
        })
        this.name = name;
        this.session = session;
    }
}