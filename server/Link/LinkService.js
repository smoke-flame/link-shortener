import {encode} from "../helpers/hashLink.js";
import LinkModel from "./LinkModel.js";


class LinkService {

    async generateShortLink(fullLink) {
        const res = await LinkModel.findOne({full: fullLink})
        if(res) {
            return res.short
        }
        const shortLink = encode(fullLink)
        const link = {short: shortLink, full: fullLink}
        await LinkModel.create(link)
        return shortLink
    }

    validateLink(link) {
        const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        return !!link.match(regExp)
    }

    async getFullLink(shortLink) {
        if(!shortLink) return

        const res = await LinkModel.findOne({short: `lk/${shortLink}`})
        if(res) {
            return res.full
        }
    }
}

export default new LinkService()