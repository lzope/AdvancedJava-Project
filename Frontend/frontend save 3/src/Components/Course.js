import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../services/CourseService";
import { useNavigate } from "react-router-dom";

function Course({course, removeCourseById}) {
    const navigate = useNavigate();

  const formattedDate = new Date(course.addedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // fractionalSecondDigits: 3 // Add milliseconds with 3 digits
  });

  
  function deleteCourse(id) {

    axios.delete(`${base_url}/api/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted succesfully.");
        alert("Deleted Succesfully");
        //removeCourseById(id);
      },
      (error) => {
        toast.error("Error!");
      }
    )
  }

//   function updateCourse(id) {
//     axios.put(`${base_url}/api/courses/${id}`).then(
//       (response) => {
//         toast.success("Course deleted succesfully.");
//         updateCourseById(id);
//       },
//       (error) => {
//         toast.error("Error!");
//       }
//     )
//   }


   return ( <Card
    style={{
      display: "flex",
      flexDirection: "row",
      width: "80%", // Increase width for horizontal layout
      margin:"auto",
      marginBottom:"10px"
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
      style={{
        width: "18rem", // Adjust image width
        height: "200px", // Adjust image height
        marginRight: "2rem", // Add margin between image and text
      }}
    />
    <CardBody>
      <CardTitle tag="h5">{course.title}</CardTitle>
      {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
        {course.content}
      </CardSubtitle> */}
      <CardText>
        {course.content}
      </CardText>
      <CardText>Date: {formattedDate}</CardText>
      {/* <Button color="warning">Update</Button>     */}
      <Button variant="primary"  onClick={()=>{
                            navigate(`/ViewCourses/edit/${course.id}`)
                        }}className="mr-3">Edit</Button>
      <Button color="danger" className="mx-3" onClick={() => {
        deleteCourse(course.id);
      }}  >Delete</Button>
    </CardBody>
  </Card>



)}

export default Course;