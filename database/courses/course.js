

const createCourseInDB = async (Schema, params) => {
  try {
      const course = new Schema(params)
      const newCourse = await course.save((err, courseCreated) => {
        if(err) throw new Error('Error creating the course')

        return courseCreated
      })
      console.log('New')
      console.log(newCourse)
      return newCourse
  } catch(err) {
      console.log(err)
  }

}

module.exports = {
  createCourseInDB
}