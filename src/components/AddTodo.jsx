import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {add_todo} from "../redux/actions/index";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    // const isEdit = useSelector(state=>state.isEdit);
    // const editTodo = useSelector(state=>state.editTodo);
    const isEdit = useSelector((state) => state.isEdit);
    const editTodo = useSelector((state) => state.editTodo);


    useEffect(()=>{
      if(isEdit && editTodo.length) {
        setTitle(editTodo[0].Name);
        setDescription(editTodo[0].Description);
      }
    }, [editTodo])

    const trackInput = (e) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        }
        else if(e.target.name === "desc") {
            setDescription(e.target.value);
        }
    }
    const addtodo = async (e) => {
        let data = {
            title: title,
            description: description
        }
        if (isEdit) {
          await dispatch({type: "UPDATE_TODO",
          payload: {
              id: editTodo[0].id,
              Name: data.title,
              Description: data.description,
          }});
        }
        else {
          await dispatch(add_todo(data));
        }
        setTitle("");
        setDescription("");
    }
    return(<Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Todo Title" value={title} variant="filled" color="success" focused name="title" onChange={(e)=>trackInput(e)}/>
        <TextField label="Description" value={description} variant="filled" color="success" focused name="desc" onChange={(e)=>trackInput(e)}/>
        <Button variant="contained" size="large" onClick={(e)=>addtodo(e)}>
          {isEdit ? "Update Todo" : "Create Todo"}
        </Button>
      </Box>);
}
export default AddTodo;