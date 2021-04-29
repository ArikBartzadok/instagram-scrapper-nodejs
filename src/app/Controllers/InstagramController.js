const PuppeteerInstagram = require('puppeteer-instagram')

class instagramController {
    async executa(req, res){
        const { usuario, senha } = req.body

        // const user = await User.findOne({ where: { email }})

        // if (!user){
        //     return res.status(401).json({ message: 'User not found' })
        // }

        // if(!(await user.checkPassword(password))){
        //     return res.status(401).json({ message: 'Incorrect password' })
        // }

        // return res.json({ 
        //     user,
        //     token: user.generateToken()
        //  })

        const instagram = new PuppeteerInstagram()

        await instagram.signin({ username: usuario, password: senha, opts: { puppeteer: { headless: false } } })
        await instagram.close()

        return res.json({ 
            message: 'ok',
            user_id: usuario
         })
    }
}

module.exports = new instagramController()