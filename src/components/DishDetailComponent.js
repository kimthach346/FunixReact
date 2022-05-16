import React, { Component } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"
import dateFormat from "dateformat"

class DishDetail extends Component {

    renderComments(comments) {
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

    renderDish(dish) {
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

    render() {
        if(this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail