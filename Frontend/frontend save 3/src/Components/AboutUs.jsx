import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import video from '../Video/1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import me from '../Components/Slider/nikhil.png';
import aditya from '../Components/Slider/Aditya.jpg';
import { Navigationbar } from "./Navigationbar";
import axios from 'axios';

export function AboutUs() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [courseId, setCourseId] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/comments/allComments?courseId=${courseId}&userId=${userId}`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            await axios.delete(`/api/comments/${commentId}`);
            fetchComments();
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const postComment = async () => {
        try {
            await axios.post(`http://localhost:8081/api/comments/course/${courseId}/user/${userId}/comments/`, { content: newComment });
            setNewComment('');
            fetchComments();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <>
            <Navigationbar></Navigationbar>
            <section className="section-white mt-5">
                <div className="container text-center">
                    <h1>About Back-To-School</h1>
                    <p>Who are we</p>
                    <Container>
                        {/* Content */}
                    </Container>
                </div>
            </section>
            <video src={video} width="100%" height="80%" className="mt-4" autoPlay loop playsInline />
            <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            {/* Founder Sections */}
                        </div>
                    </div>
                </div>
            </section>
            <CommentController
                comments={comments}
                newComment={newComment}
                setNewComment={setNewComment}
                postComment={postComment}
                fetchComments={fetchComments}
                deleteComment={deleteComment}
            />
        </>
    );
}

function CommentController({ comments, newComment, setNewComment, postComment, fetchComments, deleteComment }) {
    return (
        <div className="container mt-5">
            <h2>Comments</h2>
            <div className="mb-3">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="form-control"
                    rows="3"
                    placeholder="Enter your comment"
                ></textarea>
            </div>
            <button onClick={postComment} className="btn btn-primary me-2">Post Comment</button>
            <button onClick={fetchComments} className="btn btn-secondary me-2">Refresh Comments</button>
            <ul className="list-group mt-3">
                {comments.map(comment => (
                    <li key={comment.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {comment.content}
                        <button onClick={() => deleteComment(comment.id)} className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AboutUs;
