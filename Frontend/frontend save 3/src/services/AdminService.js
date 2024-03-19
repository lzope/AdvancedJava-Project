// import axios from "axios";

// export function deleteUser(event) {
//     event.preventDefault();
//     console.log(userData);
//     let url = `http://localhost:8083/delete/${userId}`;
//     axios.post(url,userData).then((response) => {
//         //console.log(response.data);
//         setResponseData(response.data);
//         if(response.data.status)
//             alert("Done!");
//         else
//             alert("Not done!");
//     })
// }


// services.js

import axios from "axios";
import base_url from "./CourseService";

export const deleteUser = async (userId) => {

    try {
        const response = await axios.delete(`http://localhost:8082/delete/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting log:", error);
        throw error;
    }
};


export const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8082/users`);
        return response.data;
    } catch (error) {
        console.error("Error deleting log:", error);
        throw error;
    }
};


export const saveUser = async (formData) => {
    try {
        const response = await axios.post(`http://localhost:8082/register`,formData);
        console.log('User saved successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error saving user:", error);
        throw error;
    }
};


export async function fetchUserById(id){
    try{
        console.log(id);
        const response=await axios.get(`http://localhost:8082/userbyId/${id}`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}


export async function updateUser(updatedData,id){
    try{
        const response=await axios.put(`http://localhost:8082/update/${id}`,updatedData);
        console.log(response.data)
        return response.data;
    }catch(error){
        console.log(error);
    }
}


export async function login(updatedData){
    try{
        const response=await axios.put(`http://localhost:8082/login}`,updatedData);
        console.log(response.data)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function updateCourse(updatedData,id){
    try{
        const response=await axios.put(`${base_url}/api/courses/${id}`,updatedData);
        console.log(response.data)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function fetchCourseById(id){
    try{
        const response=await axios.get(`${base_url}/api/courses/${id}`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}





