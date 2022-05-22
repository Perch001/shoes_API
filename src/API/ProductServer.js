import axios from "axios";

export default class ProductSever {
    static async getAll(){
        const response = await axios.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json')
        return response
    }
}