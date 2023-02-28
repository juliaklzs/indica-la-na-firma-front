import { LayoutComponents } from "../../components/Layout";
import NavBar from "../../components/NavBar";

import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone'

import Button from '@mui/material/Button';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Divider from '@mui/material/Divider';

const ProfileDetails = () => {
    const [profilePic, setProfilePic] = useDropzone({
    accept: 'image/png, image/jpeg'
        }) //faz o upload de arquivos 
    const [curriculum, setCurriculum] = useDropzone({
        accept: 'application/pdf'
      })
  }
    const [about, setAbout] = useState("")

    const 

    return (
        <div>
            <NavBar></NavBar>
            <LayoutComponents>
                <div>
                <Avatar
                alt="Foto de Perfil"
                src="https://picsum.photos/200/300"
                sx={{ width: 56, height: 56 }}
                />
                
                <Button variant="outlined" size="large" endIcon={<AddAPhotoOutlinedIcon/>} onclick="setProfilePic()">Alterar foto de perfil</Button>
                <Button variant="outlined" size="large" endIcon={<SettingsOutlinedIcon/>}>Alterar dados de perfil</Button>
                <Button variant="contained" size="large" endIcon={<ArticleOutlinedIcon/>} onclick="setCurriculum()">Cadastrar currículo</Button>
                </div>
                <Divider variant="middle"/>
                <div>
                
                </div>
                <Divider variant="middle"/>
                

            </LayoutComponents>
        </div>
    )

export default ProfileDetails