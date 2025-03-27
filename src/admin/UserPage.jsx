import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Select,
    MenuItem,
    Snackbar,
    Alert
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState({ id: '', name: '', email: '', role: 'User', password: '' });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://localhost:7082/api/users');
            if (response.data instanceof Array) {
                setUsers(response.data);
            } else {
                showSnackbar('Invalid response from server', 'error');
            }
        } catch (error) {
            showSnackbar('Error fetching users', 'error');
        }
    };

    const handleOpenAdd = () => {
        setCurrentUser({ id: '', name: '', email: '', role: 'User', password: '' });
        setEditMode(false);
        setOpenDialog(true);
    };

    const handleOpenEdit = (user) => {
        setCurrentUser(user);
        setEditMode(true);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmit = async () => {
        if (!currentUser.name || !currentUser.email || !currentUser.role || !currentUser.password) {
            showSnackbar('Please fill all fields', 'error');
            return;
        }

        try {
            const url = editMode
                ? `https://localhost:7082/api/users/${currentUser.id}`
                : 'https://localhost:7082/api/users';

            const method = editMode ? 'put' : 'post';

            const userToSend = {
                name: currentUser.name,
                email: currentUser.email,
                role: currentUser.role,
                password: currentUser.password
            };

          
            if (editMode) {
                userToSend.id = parseInt(currentUser.id, 10); 
            }

            const requestBody = { user: userToSend };

            console.log("Request Body", requestBody);


            const response = await axios[method](url, requestBody);

            fetchUsers();
            showSnackbar(`User ${editMode ? 'updated' : 'added'} successfully`);
            handleCloseDialog();

        } catch (error) {
            if (error.response && error.response.data) {
                if (typeof error.response.data === 'object') {
                    showSnackbar('Error saving user: ' + JSON.stringify(error.response.data), 'error');
                } else {
                    showSnackbar(error.response.data || 'Error saving user', 'error');
                }
            } else {
                showSnackbar('Error saving user', 'error');
            }
        }
    };


    const handleDelete = (id) => {
        setUserIdToDelete(id);
        setDeleteConfirmationOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`https://localhost:7082/api/users/${userIdToDelete}`);
            fetchUsers();
            showSnackbar('User deleted successfully');
        } catch (error) {
            showSnackbar('Error deleting user', 'error');
        }
        setDeleteConfirmationOpen(false);
    };

    const handleCloseDeleteConfirmation = () => {
        setDeleteConfirmationOpen(false);
        setUserIdToDelete(null);
    };

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    return (
        <Container>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4">User Management</Typography>
                    <Button variant="contained" startIcon={<Add />} onClick={handleOpenAdd} sx={{ alignSelf: 'flex-start' }}>
                        Add User
                    </Button>
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleOpenEdit(user)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(user.id)}>
                                            <Delete color="error" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>{editMode ? 'Edit User' : 'Add New User'}</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Name"
                            fullWidth
                            value={currentUser.name}
                            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            fullWidth
                            value={currentUser.email}
                            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                        />
                        <Select
                            fullWidth
                            margin="dense"
                            value={currentUser.role}
                            onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </Select>
                        <TextField
                            margin="dense"
                            label="Password"
                            type="password"
                            fullWidth
                            value={currentUser.password}
                            onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleSubmit} variant="contained">
                            {editMode ? 'Update' : 'Create'}
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={3000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert severity={snackbar.severity}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>

                <Dialog
                    open={deleteConfirmationOpen}
                    onClose={handleCloseDeleteConfirmation}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                    <DialogContent>
                        <Typography id="alert-dialog-description">
                            Are you sure you want to delete this user?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDeleteConfirmation} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default UsersPage;
