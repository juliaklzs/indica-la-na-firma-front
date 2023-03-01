import { LayoutComponents } from "../../components/Layout";
import NavBar from "../../components/NavBar";

import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone'

import Button from '@mui/material/Button';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ProfileDetails = () => {
    const [profilePic, setProfilePic] = useDropzone({
    accept: 'image/png, image/jpeg'
        }) //faz o upload de arquivos 
    const [curriculum, setCurriculum] = useDropzone({
        accept: 'application/pdf'
      })
  }
    const [about, setAbout] = useState("")

    const profileInfo [ //dados do perfil vindos do banco
        name: "XXXX XXXXXXX",
        email: "examplo@email.com",
    ]

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

                <div style={{
                    width: 952,
                    height: 300,
                    left: 220,
                    top: 759,
                }}>
                
                </div>
                <Divider variant="middle"/>

                <div style={{
                    width: 952,
                    height: 200.66,
                    left: 220,
                    top: 1094,
                }}>
                <Typography font-family={'Poppins'} fontSize={40}>
                Escreva um pouco sobre você
                </Typography>
                </div>

                <Button color="#D64545" disabled={false} size="large" variant="text" endIcon="LogoutOutlinedIcon" onclick="/register">Logout</Button>
            </LayoutComponents>
        </div>
    )

export default ProfileDetails