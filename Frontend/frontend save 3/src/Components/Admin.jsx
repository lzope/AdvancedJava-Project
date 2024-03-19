import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "../services/AdminService";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navigationbar } from "./Navigationbar";

export function Admin() {
    const [user, setUser] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState("");
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    };

    const closeModalDialog = () => {
        setShowDialog(false);
    };

    async function storeUserinState() {
        try {
            const data = await fetchUsers();
            console.log(data);
            setUser(data); // Use data.User instead of data.user
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        storeUserinState();
    }, []);

    const handleDelete = async () => {
        try {
            await deleteUser(selectedUserId);
            storeUserinState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Navigationbar></Navigationbar>
            <Container>
                <Alert className="mt-5 " variant="success">
                    <h1>
                        <center>List of Users</center>
                    </h1>
                </Alert>
                {user.length !== 0 ? (
                    <Table className="mt-4 ">
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Username</th>
                                <th>UserEmail</th>
                                <th>userCity</th>
                                <th>userPostalCode</th>
                                <th>userContactNumber</th>
                                <th>userPassword</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((s) => {
                                return (
                                    <tr>
                                           <td>{s.id}</td>
                                        <td>{s.userName}</td>
                                        <td>{s.userEmail}</td>
                                        <td>{s.userCity}</td>
                                        <td>{s.userPostalCode}</td>
                                        <td>{s.userContactNumber}</td>
                                        <td>{s.userPassword}</td>
                                        <td>{s.isAdmin}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    openModalDialog();
                                                    setSelectedUserId(s.id);
                                                }}
                                                className="mr-3"
                                            >
                                                Delete
                                            </Button>{" "}
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    navigate(`/admin/edit/${s.id}`);
                                                }}
                                                className="mr-3"
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                ) : (
                    <p>
                        <b>No Users Found!!!</b>
                    </p>
                )}

                <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you really want to delete Log of {selectedUserId}?{" "}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={() => {
                                handleDelete();
                            }}
                        >
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDialog}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </>
    );
}
