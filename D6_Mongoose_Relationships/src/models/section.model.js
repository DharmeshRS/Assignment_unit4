const mongoose=require('mongoose')

const sectionSchema=new mongoose.Schema({
        section_type:{
                type:String
        }
});

const Section=mongoose.model("section",sectionSchema)

module.exports=Section;