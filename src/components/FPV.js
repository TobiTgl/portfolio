import React, {useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import { Container} from 'react-bootstrap';

export default function FPV() {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        axios.get('https://res.cloudinary.com/tobitgl/video/list/fpv.json')
            .then(res => {
                const arr = res.data.resources;
                setVideo(arr);
            });
      }, []);
    return (
        <section id="fpv">
            <Container className="fpv">
                <div className="fpv-wrapper"> 
                    <h2 className="section-title">FPV</h2>
                    {
                    video.map(data => {
                        return(
                        <ReactPlayer url={`https://res.cloudinary.com/tobitgl/video/upload/${data.public_id}.mp4`} playing='true' volume='0' loop='true' width='100%' height='100%'/>   
                        )
                    })
                } 
                </div>
            </Container>
        </section>
    )
}
