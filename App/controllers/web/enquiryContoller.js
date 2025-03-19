const enquiryModel = require("../../models/enquiry.models")

let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body

    let enquiry = new enquiryModel({ name, email, phone, message })

    enquiry.save().then(() => {
        res.send({ status: 1, message: "Enquiry saved successfully" })
    }).catch((err) => {
        res.send({ status: 0, message: "Error while saved successfully", error: err })
    })
}

let enquiryList = async (req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({ status: 1, message: "Enquiry list", enquiryList: enquiryList })
}

let enquiryDelete = async (req, res) => {
    let enId = req.params.id
    let enquiry = await enquiryModel.deleteOne({ _id: enId })
    res.send({ status: 1, message: "Enquiry deleted Successfully", enquiry })
}


let enquirySingleRow = async (req, res) => {
    let enId = req.params.id
    let enquiry = await enquiryModel.findOne({ _id: enId })
    res.send({ status: 1, enquiry })
}


let enquiryUpdateRow = async (req, res) => {
    let enquiryId = req.params.id
    let { name, email, phone, message } = req.body
    let UpdateObj = { name, email, phone, message }

    let updateRes = await enquiryModel.updateOne({ _id: enquiryId }, UpdateObj)
    res.send({ status: 1, message: "Enquiry updated successfully", updateRes })
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdateRow }