import { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../services/CourseService";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigationbar } from "./Navigationbar";


function ViewCourses() {
    //Executes the getAllCourses function ones
    useEffect(()=>{
        getAllCourses();
    },[]);

    //function to call the server
    function getAllCourses() {
        axios.get(`${base_url}/api/courses`).then(
            (response) => {
                //success
                console.log(response);
                toast.success("Courses has been loaded.")
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong.");
            }
        )
    }

    //state management for the courses data
    const [courses, setCourses] = useState([]);

    function removeCourseById(id) {
        setCourses(courses.filter((c) => c.id!=id))
    }


    return (
        <>
        <Navigationbar></Navigationbar>
        <div>
            <h3> Here are the available courses :</h3>  
            {
                (courses.length>0) ? courses.map((item)=> (
                    <Course key={item.id} course={item} update={removeCourseById}/>
                )) : " No Courses."
            }          
        </div>
        </>
    )
}

export default ViewCourses;