import LinkService from "./LinkService.js";

class linkController {

    async createLink(req, res) {
        const fullLink = req.body.link
        const isLinkValid = LinkService.validateLink(fullLink)
        if(isLinkValid) {
            const shortLink = await LinkService.generateShortLink(fullLink)
            const response = {status: 1, payload: {link: shortLink}}
            res.status(201).json(response)
        } else {
            const response = {status: 0, payload: null}
            res.status(400).json(response)
        }
    }

    async redirectLink(req, res) {
        const fullLink = await LinkService.getFullLink(req.params.short_link)
        if(fullLink) {
            res.redirect(fullLink)
        } else {
            res.send('Incorrect link')
        }
    }
}

export default new linkController()