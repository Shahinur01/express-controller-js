const path=require('path')

const homeController=(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}
const teamController=(req,res) => {
    res.sendFile(path.join(__dirname, '../public/team.html'))
}
const contactController=(req,res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'))
}

const ageCheck = (req, res) => {
    const {age,name}=req.body
 if (age>=21) {
    res.status(200).send(`Hi ${name}'tomar biyar boyos hoyeche`)
 }
 else{
    res.status(200).send(`Hi ${name} tomar biyar boyos hoini`)
 }
}
module.exports={
    homeController,teamController,contactController,ageCheck
}