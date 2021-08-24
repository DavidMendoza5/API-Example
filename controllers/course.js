const CourseSchema = require('../model/course')
const { createCourseInDB } = require('../database/courses/course')
const { getInfo } = require('../database/users/user')

const createCourse = async (req, res, next) => {
  try {
    const params = req.body
    let status = 0, message = {}
  
    const course = await createCourseInDB(CourseSchema, params)

    console.log(course)
    
    if(!course) {
      message = 'Error creating a course'
      throw new Error(message)
    }
  
    res.status(status).send(course)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const getInformation = async (req, res, next) => {
  try {
      let info = await getInfo(CourseSchema, {}, {password: false}, next)
      res.status(200).send(info)
  } catch(err) {
      res.status(500).send('Error')
  }
}

module.exports = {
  createCourse,
  getInformation
}