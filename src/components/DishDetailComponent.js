import React, { Component } from "react"
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"

class DishDetail extends Component {

    renderComments(comments) {
        if(comments != null) {
            return (
                <div key={comments.id} className="col-12 col-md-6 mt-4">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <li>
                            <p>{comments.comment}</p>
                            <p>-- {comments.author}, {comments.date}</p>
                        </li>
                        
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div key={comments.id} className="col-12 col-md-6 mt-4">
                <h4>Comments</h4>
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </div>
        )
    }
}

export default DishDetail