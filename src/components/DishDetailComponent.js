import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap"
import dateFormat from "dateformat"
import { Link } from "react-router-dom"
import CommentForm from "./CommentForm"

function RenderComments({comments, addComment, dishId}) {
    
    if(comments != null) {
        return (
            <div className="col-12 col-md-6 mt-2">
                <h4>Comments</h4>
                {comments.map((com) => {
                    return (
                        <CardText key={com.id}>
                            {com.comment}<br/>
                            -- {com.author}, {dateFormat(com.date, "dd/mm/yyyy")} 
                        </CardText>
                    )
                })}
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-6 mt-2">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function DishDetail(props) {
    if(props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id} />
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default DishDetail