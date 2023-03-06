import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="project">
            <div className="img-container" id={"img" + props.id} >
                <img alt={props.Title} src={process.env.PUBLIC_URL + props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {props.Title}
                    </li>
                    <li>
                        <strong>Github Repository:</strong> {props.Github}
                    </li>
                    <li>
                        <strong>WebPage:</strong> {props.Deployment}
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ProjectCard;
