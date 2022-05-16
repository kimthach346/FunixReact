import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"
import dateFormat from "dateformat"



    function RenderComments({comments}) {
        if(comments != null) {
            return (
                <div className="col-12 col-md-6 mt-4">
                    <h4>Comments</h4>
                    {comments.map((com) => {
                        return (
                            <CardText key={com.id}>
                                {com.comment}<br/>
                                -- {com.author}, {dateFormat(com.date, "dd/mm/yyyy")} 
                            </CardText>
                        )

                    })}
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
            <div className="col-12 col-md-6 mt-4">
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
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
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